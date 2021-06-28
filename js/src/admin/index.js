import { extend, override } from 'flarum/extend';
import icon from 'flarum/common/helpers/icon';
import Dropdown from 'flarum/common/components/Dropdown';
import Button from 'flarum/common/components/Button';
import PermissionsPage from 'flarum/admin/components/PermissionsPage';
import PermissionGrid from 'flarum/admin/components/PermissionGrid';

app.initializers.add('afrux-asirem', (app) => {
  extend(PermissionsPage.prototype, 'content', function (vnode) {
    vnode[0].children[1].attrs.className += " Button--dashed";
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
            label={app.translator.trans('afrux-asirem.admin.permissions.filter_scopes')}
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
}, -999999);
