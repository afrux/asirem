import FlarumExtensionPage from "flarum/admin/components/ExtensionPage";
import listItems from 'flarum/common/helpers/listItems';
import Switch from 'flarum/common/components/Switch';
import icon from 'flarum/common/helpers/icon';
import Button from "flarum/common/components/Button";

export default class ExtensionPage extends FlarumExtensionPage {
  oninit() {
    app.current.data.extension = this.extension.extra['flarum-extension'].title;
  }

  header() {
    const topItems = this.topItems();

    topItems.get('version').attrs.className += " UiKit-Label";

    return (
      <div className="ExtensionPage-header AdminHeader">
        <div className="AdminHeader-container">
          <span className="AdminHeader-icon" style={this.extension.icon}>
            {this.extension.icon ? icon(this.extension.icon.name) : ''}
          </span>
          <div className="AdminHeader-info">
            <h2 className="AdminHeader-title">{this.extension.extra['flarum-extension'].title}</h2>
            <div className="AdminHeader-description helpText">{this.extension.description}</div>
          </div>
          <div className="ExtensionPage-headerTopItems">
            <ul>{listItems(topItems.toArray())}</ul>
          </div>
        </div>
      </div>
    );
  }

  view() {
    if (!this.extension) return null;

    const sections = this.sections();
    const infoItems = this.infoItems();
    this.activeSection = this.activeSection || 'content';

    if (sections.items['permissions']) {
      sections.items['permissions'].content[0] = sections.items['permissions'].content[0].children[1].children;
    }

    return (
      <div className={'ExtensionPage ' + this.className()}>
        {this.header()}
        <div className="ExtensionPage-body">
          <div className="container">
            <div className="ExtensionPage-headerItems">
              <Switch state={this.isEnabled()} onchange={this.toggle.bind(this, this.extension.id)}>
                {this.isEnabled(this.extension.id)
                  ? app.translator.trans('core.admin.extension.enabled')
                  : app.translator.trans('core.admin.extension.disabled')}
              </Switch>
              <aside className="ExtensionInfo">
                <ul>{listItems(infoItems.toArray())}</ul>
              </aside>
            </div>
            <div className="ExtensionPage-sections-nav">
              {Object.keys(sections.items).map(section => (
                <Button
                  className="Button ExtensionPage-sections-nav-item"
                  onclick={() => this.activeSection = section}>
                  {section}
                </Button>
              ))}
            </div>
            <div className="ExtensionPage-sections">
              {Object.keys(sections.items).map(sectionKey => {
                return (
                  <div className={["ExtensionPage-section", this.activeSection === sectionKey ? 'ExtensionPage-section--active' : ''].join(' ')}>
                    {sections.items[sectionKey].content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  content(original) {
    if (!this.isEnabled()) {
      return (
        <div className="Asirem-infobox">
          {app.translator.trans('core.admin.extension.enable_to_see')}
        </div>
      )
    }

    return original();
  }
}
