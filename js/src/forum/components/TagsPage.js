import IndexPage from 'flarum/components/IndexPage';
import Link from 'flarum/components/Link';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import listItems from 'flarum/helpers/listItems';
import humanTime from 'flarum/helpers/humanTime';

import tagIcon from 'flarum/tags/common/helpers/tagIcon';
import tagLabel from 'flarum/tags/common/helpers/tagLabel';
import sortTags from 'flarum/tags/common/utils/sortTags';

export default class TagsPage {
  view() {
    if (this.loading) {
      return <LoadingIndicator />;
    }

    const pinned = this.tags.filter((tag) => tag.position() !== null);
    const cloud = this.tags.filter((tag) => tag.position() === null);

    return (
      <div className="Asirem-TagsPage">
        {IndexPage.prototype.hero()}
        <div className="sideNavContainer container">
          <nav className="TagsPage-nav IndexPage-nav sideNav">
            <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
          </nav>

          <div className="TagsPage-content sideNavOffset">
            <ul className="Asirem-TagTiles">
              {pinned.map((tag) => {
                const lastPostedDiscussion = tag.lastPostedDiscussion();
                const children = sortTags(tag.children() || []);
                const tagIconNode = tagIcon(tag, {}, { useColor: false });

                if (tagIconNode.attrs.style && tagIconNode.attrs.style.backgroundColor) {
                  delete tagIconNode.attrs.style.backgroundColor;
                }

                return (
                  <li className={'Asirem-TagTile ' + (tag.color() ? 'colored' : '')} style={{ '--tag-bg': tag.color() }}>
                    <Link className="Asirem-TagTile-info" href={app.route.tag(tag)}>
                      <div className="Asirem-TagTile-icon">{tagIconNode}</div>
                      <div className="Asirem-TagTile-content">
                        <h3 className="Asirem-TagTile-name">{tag.name()}</h3>
                        <p className="Asirem-TagTile-description">{tag.description()}</p>
                        {children && children.length ? (
                          <div className="Asirem-TagTile-children">
                            {children.map((child) => [
                              <Link href={app.route.tag(child)} className="TagLabel">
                                {child.name()}
                              </Link>,
                              ' ',
                            ])}
                          </div>
                        ) : (
                          ''
                        )}
                        {lastPostedDiscussion ? (
                          <Link
                            className="Asirem-TagTile-lastPostedDiscussion"
                            href={app.route.discussion(lastPostedDiscussion, lastPostedDiscussion.lastPostNumber())}
                          >
                            <span className="Asirem-TagTile-lastPostedDiscussion-title">{lastPostedDiscussion.title()}</span>
                            {humanTime(lastPostedDiscussion.lastPostedAt())}
                          </Link>
                        ) : (
                          <span className="Asirem-TagTile-lastPostedDiscussion" />
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {cloud.length ? <div className="Asirem-TagCloud">{cloud.map((tag) => [tagLabel(tag, { link: true }), ' '])}</div> : ''}
          </div>
        </div>
      </div>
    );
  }
}
