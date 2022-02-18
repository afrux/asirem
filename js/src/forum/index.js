import { extend, override } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import TagsPage from 'flarum/tags/components/TagsPage';
import AsiremTagsPage from './components/TagsPage';
import { truncate } from 'flarum/utils/string';

import Footer from 'flarum/extensions/afrux-theme-base/forum/components/Footer';

app.initializers.add('afrux-asirem', () => {
  extend(DiscussionListItem.prototype, 'view', function (vnode) {
    const discussionListItemContent = vnode.children.find(
      (e) => e && e.tag === 'div' && e.attrs && e.attrs.className.includes('DiscussionListItem-content')
    );

    discussionListItemContent.children[0] = (
      <div className="DiscussionListItem-author-container">{[discussionListItemContent.children[0], discussionListItemContent.children[1]]}</div>
    );

    delete discussionListItemContent.children[1];

    discussionListItemContent.children[3] = <div className="DiscussionListItem-stats">{discussionListItemContent.children[3]}</div>;

    if (this.attrs.discussion.tags() && this.attrs.discussion.tags()[0] && this.attrs.discussion.tags()[0].color()) {
      vnode.attrs.style = { '--tag-color': this.attrs.discussion.tags()[0].color(), ...(vnode.attrs.style || {}) };
    }

    if (this.attrs.discussion.isUnread()) {
      vnode.attrs.className += ' DiscussionListItem--unread';
    }
  });

  extend(DiscussionListItem.prototype, 'infoItems', function (items) {
    if (!items.has('excerpt')) {
      const firstPost = this.attrs.discussion.firstPost();

      if (firstPost) {
        const excerpt = truncate(firstPost.contentPlain(), 175);

        items.add('excerpt', <div>{excerpt}</div>, -100);
      }
    }
  });

  override(Footer.prototype, 'separator', function () {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="288" className="Asirem-footerWaves">
        <path
          fill-opacity="1"
          d="M0,224L18.5,186.7C36.9,149,74,75,111,58.7C147.7,43,185,85,222,112C258.5,139,295,149,332,154.7C369.2,160,406,160,443,149.3C480,139,517,117,554,101.3C590.8,85,628,75,665,96C701.5,117,738,171,775,165.3C812.3,160,849,96,886,101.3C923.1,107,960,181,997,218.7C1033.8,256,1071,256,1108,250.7C1144.6,245,1182,235,1218,202.7C1255.4,171,1292,117,1329,117.3C1366.2,117,1403,171,1422,197.3L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
        ></path>
      </svg>
    );
  });

  override(TagsPage.prototype, 'view', AsiremTagsPage.prototype.view);
});
