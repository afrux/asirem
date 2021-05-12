import PermissionGrid from "flarum/admin/components/PermissionGrid";
import Switch from 'flarum/common/components/Switch';
import icon from 'flarum/common/helpers/icon';

export default class GroupPermissions extends PermissionGrid {
  oninit(vnode) {
    super.oninit(vnode);
  }

  view() {
    const group = this.attrs.group;
    const scopes = this.scopeItems();


    return (
      <div className="GroupPermissions">
        <div className="GroupPermissions-container">
          <div className="GroupPermissions-header IconicText">
            <div className="GroupPermissions-header-icon IconicText-icon">
              {icon(group.icon())}
            </div>
            <div className="GroupPermissions-header-label IconicText-label">
              {group.namePlural()}
            </div>
          </div>
          <div className="GroupPermissions-body">
            {this.permissionItems().toArray().map(permissionGroup => (
              <div className="GroupPermissions-permissionGroup">
                <div className="GroupPermissions-permissionGroup-label">
                  <div className="GroupPermissions-permissionGroup-label-icon">
                    {icon(permissionGroup.icon)}
                  </div>
                  <div className="GroupPermissions-permissionGroup-label-text">
                    {permissionGroup.label}
                  </div>
                </div>
                <div className="GroupPermissions-permissionGroup-items">
                  {permissionGroup.children.map(permission => (
                    <div className="GroupPermissions-permission">
                      <div className="GroupPermissions-permission-label IconicText">
                        <div className="GroupPermissions-permission-label-icon IconicText-icon">
                          {icon(permission.icon)}
                        </div>
                        <div className="GroupPermissions-permission-label-text IconicText-label">
                          {permission.label}
                        </div>
                      </div>
                      <div className="GroupPermissions-permission-control">
                        {this.renderPermissionControl(permission)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  renderPermissionControl(permission) {
    if (permission.setting) return permission.setting();
    else
      return (
        <Switch />
      );
  }
}
