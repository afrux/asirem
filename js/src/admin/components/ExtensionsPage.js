import AdminPage from "flarum/admin/components/AdminPage";
import getCategorizedExtensions from "flarum/admin/utils/getCategorizedExtensions";
import ExtensionsWidget from "flarum/admin/components/ExtensionsWidget";
import icon from "flarum/common/helpers/icon";
import isExtensionEnabled from "flarum/admin/utils/isExtensionEnabled";
import Link from "flarum/common/components/Link";

export default class ExtensionsPage extends AdminPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.extensions = getCategorizedExtensions();
  }

  headerInfo() {
    return {
      className: 'Asirem-ExtensionsPage',
      icon: 'fas fa-puzzle-piece',
      title: app.translator.trans('sycho-asirem.admin.extensions'),
      description: 'List of all installed extensions.'
    };
  }

  content() {
    return (
      <div className="Asirem-ExtensionCategories">
        <div className="Asirem-ExtensionCategories-container">
          {Object.keys(this.extensions).map(category => (
            <div className="Asirem-ExtensionCategory">
              <h3 className="Asirem-ExtensionCategory-title">{app.translator.trans(`core.admin.nav.categories.${category}`)}</h3>
              <div className="Asirem-ExtensionCategory-container">
                {this.extensions[category].map(extension => (
                  <Link href={app.route('extension', { id: extension.id })} className="Asirem-Extension">
                    <div className="Asirem-Extension-icon">
                    <span className="ExtensionListItem-icon ExtensionIcon" style={extension.icon}>
                      {extension.icon ? icon(extension.icon.name) : ''}
                    </span>
                    </div>
                    <div className="Asirem-Extension-content">
                      <div className="Asirem-Extension-title">
                        <div
                          className={[
                            "ExtensionListItem-Dot",
                            "Asirem-Extension-state",
                            (isExtensionEnabled(extension.id) ? 'enabled' : 'disabled')
                          ].join(' ')}
                        ></div>
                        <div className="Asirem-Extension-title-value">{extension.extra['flarum-extension'].title}</div>
                      </div>
                      <div className="Asirem-Extension-details">
                        <div className="Asirem-Extension-package">{extension.name}</div>
                        <div className="Asirem-Extension-version">{extension.version}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
