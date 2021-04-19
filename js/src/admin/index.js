import { extend, override } from 'flarum/extend';
import AdminNav from 'flarum/admin/components/AdminNav';
import AdminHeader from 'flarum/admin/components/AdminHeader';
import classList from 'flarum/common/utils/classList';
import icon from 'flarum/common/helpers/icon';
import SelectDropdown from 'flarum/common/components/SelectDropdown';
import LinkButton from 'flarum/common/components/LinkButton';
import DashboardPage from 'flarum/admin/components/DashboardPage';
import FlarumExtensionPage from 'flarum/admin/components/ExtensionPage';
import ExtensionsWidget from 'flarum/admin/components/ExtensionsWidget';

import ExtensionsPage from './components/ExtensionsPage';
import ExtensionPage from './components/ExtensionPage';
import Navigation from 'flarum/common/components/Navigation';
import StatusWidget from 'flarum/admin/components/StatusWidget';
import Dropdown from 'flarum/common/components/Dropdown';
import Button from 'flarum/common/components/Button';
import PermissionsPage from 'flarum/admin/components/PermissionsPage';

app.initializers.add('sycho/flarum-asirem', () => {
  app.routes['extensions'] = { path: '/extensions', component: ExtensionsPage };

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

  extend(StatusWidget.prototype, 'items', (items) => {
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
  });

  extend(PermissionsPage.prototype, 'content', (vnode) => {
    /*vnode[0].children[0].children.map(groupNode => {
      if (!groupNode.children[0].attrs.group) return;

      groupNode.attrs.style = {"--group-color": groupNode.children[0].attrs.group.color()};
    });*/

    vnode[0].children[1].attrs.className += " Button--dashed";
  });

  extend(FlarumExtensionPage.prototype, 'oninit', ExtensionPage.prototype.oninit);
  override(FlarumExtensionPage.prototype, 'header', ExtensionPage.prototype.header);
  override(FlarumExtensionPage.prototype, 'view', ExtensionPage.prototype.view);
  override(FlarumExtensionPage.prototype, 'content', ExtensionPage.prototype.content);
}, -999999);
