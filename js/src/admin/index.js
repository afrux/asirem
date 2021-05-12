import { extend, override } from 'flarum/extend';
import AdminNav from 'flarum/admin/components/AdminNav';
import AdminHeader from 'flarum/admin/components/AdminHeader';
import classList from 'flarum/common/utils/classList';
import icon from 'flarum/common/helpers/icon';
import avatar from 'flarum/common/helpers/avatar';
import username from 'flarum/common/helpers/username';
import listItems from 'flarum/common/helpers/listItems';
import SelectDropdown from 'flarum/common/components/SelectDropdown';
import LinkButton from 'flarum/common/components/LinkButton';
import DashboardPage from 'flarum/admin/components/DashboardPage';
import HeaderSecondary from 'flarum/admin/components/HeaderSecondary';
import FlarumExtensionPage from 'flarum/admin/components/ExtensionPage';
import ExtensionsWidget from 'flarum/admin/components/ExtensionsWidget';
import Navigation from 'flarum/common/components/Navigation';
import Alert from 'flarum/common/components/Alert';
import StatusWidget from 'flarum/admin/components/StatusWidget';
import Dropdown from 'flarum/common/components/Dropdown';
import Button from 'flarum/common/components/Button';
import EditGroupModal from 'flarum/admin/components/EditGroupModal';
import PermissionsPage from 'flarum/admin/components/PermissionsPage';
import PermissionGrid from 'flarum/admin/components/PermissionGrid';
import UserListPage from 'flarum/admin/components/UserListPage';
import GroupBadge from 'flarum/common/components/GroupBadge';
import Group from 'flarum/common/models/Group';

import UploadImageButton from './components/UploadImageButton';
import ExtensionsPage from './components/ExtensionsPage';
import ExtensionPage from './components/ExtensionPage';
import GroupPermissions from './components/GroupPermissions';

app.initializers.add('sycho-asirem', (app) => {
  app.routes['extensions'] = { path: '/extensions', component: ExtensionsPage };

  app.extensionData
    .for('sycho-asirem')
    .registerSetting(() => {
      return (
        <div className="Form-group HeroImageForm">
          <label for="sycho-asirem.welcome_hero_banner">{app.translator.trans('sycho-asirem.admin.settings.hero_banner')}</label>
          <UploadImageButton
            setting="sycho-asirem.welcome_hero_banner"
            serializedName="welcomeHeroBanner"
            routeName="asirem_banner"
            name="asirem_banner"
          />
        </div>
      );
    })
    .registerSetting({
      setting: 'sycho-asirem.welcome_hero_banner_position',
      type: 'text',
      label: app.translator.trans('sycho-asirem.admin.settings.hero_banner_position'),
    });

  override(AdminNav.prototype, 'view', function () {
    const items = this.items();

    items.remove('search');
    items.remove('category-core');

    items.add(
      'extensions',
      <LinkButton
        href={app.route('extensions')}
        icon="fas fa-puzzle-piece"
        title={app.translator.trans('sycho-asirem.admin.extensions')}
        active={['extension', 'extensions'].includes(app.current.data.routeName)}
      >
        <span>{app.translator.trans('sycho-asirem.admin.extensions')}</span>
        {app.current.data.extension
          ? <span className="Asirem-extensions-nav-current">{app.current.data.extension}</span>
          : []
        }
      </LinkButton>
    );

    return (
      <SelectDropdown className="AdminNav App-titleControl AdminNav-Main" buttonClassName="Button">
        {items.toArray().concat()}
      </SelectDropdown>
    );
  });

  extend(DashboardPage.prototype, 'availableWidgets', (items) => {
    items.remove('extensions');
  });

  extend(Navigation.prototype, 'getBackButton', function (button) {
    button.attrs.className = button.attrs.className.replace('Button--icon', '');

    if (app.current.data.routeName === 'extension') {
      button.attrs.href = app.route('extensions');
      delete button.attrs.onclick;
      button.children = app.translator.trans('sycho-asirem.admin.extensions');
    } else {
      button.children = app.translator.trans('sycho-asirem.admin.header.go_back');
    }

    return button;
  });

  override(AdminHeader.prototype, 'view', function(original, vnode) {
    switch (this.attrs.className) {
      case 'DashboardPage-header':
        this.handleClearCache = StatusWidget.prototype.handleClearCache;

        this.controls = () => (
          <Dropdown
            label={app.translator.trans('core.admin.dashboard.tools_button')}
            icon="fas fa-cog"
            buttonClassName="Button"
            menuClassName="Dropdown-menu--right"
          >
            <Button onclick={this.handleClearCache.bind(this)}>{app.translator.trans('core.admin.dashboard.clear_cache_button')}</Button>
          </Dropdown>
        );
        break;

      case 'Asirem-ExtensionsPage-header':
        this.controls = () => {
          const buttonGroup = ExtensionsWidget.prototype.controlItems().toArray()[0].children;

          buttonGroup[0].attrs.menuClassName += ' Dropdown-menu--right';

          return buttonGroup;
        };
    }

    return (
      <div className={classList(['AdminHeader', this.attrs.className])}>
        <div className="container AdminHeader-container">
          <div className="AdminHeader-icon">{icon(this.attrs.icon)}</div>
          <div className="AdminHeader-info">
            <h2 className="AdminHeader-title">{vnode.children}</h2>
            <div className="AdminHeader-description">{this.attrs.description}</div>
          </div>
          <div className="AdminHeader-controls">
            {this.controls && this.controls()}
          </div>
        </div>
      </div>
    );
  });

  override(StatusWidget.prototype, 'content', function (original) {
    const items = this.items();
    const newVersionAvailable = app.data.updateAvailable;

    items.remove('tools');

    const icons = {
      'version-flarum': 'fas fa-comment',
      'version-php': 'fab fa-php',
      'version-mysql': 'fas fa-database',
    };

    Object.keys(items.items).map(key => {
      const item = items.get(key);

      item[0].tag = 'div';
      item[0].attrs.className = 'Asirem-StatusWidget-key';
      item[2] = <div className="Asirem-StatusWidget-value">{item[2]}</div>

      item[1] = <div className="Asirem-StatusWidget-content">{[item[0], item[2]]}</div>;
      item[0] = <div className="Asirem-StatusWidget-icon">{icon(icons[key])}</div>;

      delete item[2];
    });

    if (newVersionAvailable) {
      items.get('version-flarum').push(
        <Button
          className="Asirem-StatusWidget-control Button Button--icon"
          icon="fas fa-arrow-alt-circle-up"
          aria-expanded="true"
        />
      );
    }

    let content = [<ul>{listItems(items.toArray())}</ul>];

    if (newVersionAvailable) {
      content.push(
        <div className="Asirem-VersionUpdate">
          <Alert type="info" dismissible={false}>
            <h3>{app.translator.trans('sycho-asirem.admin.upgrade_alert.title', {
              version: newVersionAvailable
            })}</h3>
            <p>{app.translator.trans('sycho-asirem.admin.upgrade_alert.content', {
              discuss_link: <a href="https://discuss.flarum.org/t/blog">https://discuss.flarum.org/t/blog</a>
            })}</p>
          </Alert>
        </div>
      );
    }

    return content;
  });

  extend(PermissionsPage.prototype, 'content', function (vnode) {
    /*vnode[0].children[0].children.map(groupNode => {
      if (!groupNode.children[0].attrs.group) return;

      groupNode.attrs.style = {"--group-color": groupNode.children[0].attrs.group.color()};
    });*/

    vnode[0].children[0].children = app.store
      .all('groups')
      .filter((group) => [Group.GUEST_ID, Group.MEMBER_ID].indexOf(group.id()) === -1)
      .map((group) => (
        <Dropdown
            label={[
              <GroupBadge
                group={group}
                className="Group-icon"
                label={null}
              />,
              <span className="Group-name">{group.namePlural()}</span>
            ]}
            buttonClassName="Button Group"
            // menuClassName="Dropdown-menu--right"
          >
            <Button
              icon="fas fa-pencil-alt"
              onclick={() => app.modal.show(EditGroupModal, { group })}
            >
                {app.translator.trans('sycho-asirem.admin.permissions.edit_group')}
            </Button>
            <Button
              icon="fas fa-key"
              onclick={() => this.permissionUI = { prespective: 'group', group }}
            >
                {app.translator.trans('sycho-asirem.admin.permissions.edit_group_permissions')}
            </Button>
          </Dropdown>
      ));
    vnode[0].children[1].attrs.className += " Button--dashed";

    vnode[1] = (
      this.permissionUI && this.permissionUI.prespective === 'group' && <GroupPermissions group={this.permissionUI.group} />
    ) || vnode[1];
  });

  extend(PermissionGrid.prototype, 'oninit', function () {
    this.selectedScopes = Object.keys(this.scopeItems(true).items);
  });

  override(PermissionGrid.prototype, 'view', function (original, vnode) {
    const scopes = this.scopeItems(true);

    return [
      <div className="Asirem-PermissionsPage-scopes">
        <div className="Asirem-PermissionsPage-scopes-title">Scopes</div>
        <div className="Asirem-PermissionsPage-scopes-controls">
          <Button
            className="Button"
            icon="fas fa-eye"
            onclick={() => this.selectedScopes = Object.keys(scopes.items)}>Show All</Button>
          <Button
            className="Button"
            icon="fas fa-eye-slash"
            onclick={() => this.selectedScopes = ['global']}>Hide All</Button>
          <Dropdown
            label={app.translator.trans('sycho-asirem.admin.permissions.filter_scopes')}
            icon="fas fa-tags"
            buttonClassName="Button"
            menuClassName="Dropdown-menu--right"
          >
            {Object.keys(scopes.items).map(key => (
              <Button
                icon={this.selectedScopes.includes(key) ? 'fas fa-check' : ''}
                onclick={() => {
                  if (this.selectedScopes.includes(key))
                    this.selectedScopes = this.selectedScopes.filter(scope => scope !== key);
                  else
                    this.selectedScopes.push(key);
                }}
              >
                  {scopes.get(key).label}
                </Button>
            ))}
          </Dropdown>
        </div>
      </div>,
      <div className="PermissionsPage-permissions-overflow">{original(vnode)}</div>
    ];
  });

  extend(PermissionGrid.prototype, 'scopeItems', function (scopeItems, internal) {
    if (internal) return scopeItems;

    Object.keys(scopeItems.items).map(key => {
      if (!this.selectedScopes.includes(key)) {
        scopeItems.remove(key);
      }
    });
  });

  extend(PermissionGrid.prototype, ['oncreate', 'onupdate'], function (vnode) {
    $('.PermissionGrid-child .Button--text').removeClass('Button--text');
  });

  extend(UserListPage.prototype, 'columns', (columns) => {
    columns.add(
      'avatar',
      {
        name: icon('fas fa-user-circle'),//app.translator.trans('sycho-asirem.admin.users.grid.columns.avatar.title'),
        content: (user) => avatar(user, { className: 'UserListPage-grid-avatar' }),
      },
      95
    );

    columns.remove('username');
    columns.add(
      'username',
      {
        name: app.translator.trans('core.admin.users.grid.columns.username.title'),
        content: (user) => {
          const displayName = username(user);
          const username_ = user.username();

          console.log(displayName, username_);

          if (username_ === displayName.text) {
            return username_;
          }

          return [
            username_,
            ' (',
            displayName,
            ')'
          ];
        },
      },
      90
    );

    const joinDate = columns.get('joinDate');
    joinDate.name = [icon('fas fa-clock'), ' ', joinDate.name];

    const emailAddress = columns.get('emailAddress');
    emailAddress.name = [icon('far fa-envelope'), ' ', emailAddress.name];

    columns.add(
      'profileLink',
      {
        name: '',//app.translator.trans('sycho-asirem.admin.users.grid.columns.profile_link.title'),
        content: (user) =>
          <a className="Button Button--icon UserList-profileLinkBtn" href={`${app.forum.attribute('baseUrl')}/u/${user.slug()}`}>
            {icon('fas fa-link')}
          </a>,
      }
    );
  });

  extend(UserListPage.prototype, 'onupdate', function (vnode) {
    this.$('.UserList-emailIconBtn').removeClass('Button--text');
  });

  extend(UserListPage.prototype, 'content', function (vnode) {
    vnode[0] = (
      <div className="UserListPage-stat-container">
        <div class="UserListPage-totalUsers UserListPage-stat">
          <div className="UserListPage-stat-value">{this.userCount}</div>
          <div className="UserListPage-stat-key">{app.translator.trans('core.admin.users.total_users', { count: 0 })[0].replace(': ', '')}</div>
        </div>
      </div>
    );
  });

  extend(HeaderSecondary.prototype, 'items', (items) => {
    items.get('help').attrs.className = 'Button Button--link';
  })

  extend(FlarumExtensionPage.prototype, 'oninit', ExtensionPage.prototype.oninit);
  override(FlarumExtensionPage.prototype, 'header', ExtensionPage.prototype.header);
  override(FlarumExtensionPage.prototype, 'view', ExtensionPage.prototype.view);
  override(FlarumExtensionPage.prototype, 'content', ExtensionPage.prototype.content);
}, -999999);
