import { extend } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import WelcomeHero from 'flarum/forum/components/WelcomeHero';
import TagsPage from 'flarum/tags/components/TagsPage';
import { truncate } from 'flarum/utils/string';

app.initializers.add('sycho-asirem', () => {
  extend(DiscussionListItem.prototype, 'view', function (vnode) {
    const discussionListItemContent = vnode.children.find(e => e.tag === 'div' && e.attrs && e.attrs.className.includes("DiscussionListItem-content"));

    discussionListItemContent.children[0] = (
      <div className="DiscussionListItem-author-container">{[discussionListItemContent.children[0], discussionListItemContent.children[1]]}</div>
    );

    delete discussionListItemContent.children[1];

    discussionListItemContent.children[3] = (
      <div className="DiscussionListItem-stats">{discussionListItemContent.children[3]}</div>
    );

    if (this.attrs.discussion.tags() && this.attrs.discussion.tags()[0] && this.attrs.discussion.tags()[0].color()) {
      vnode.attrs.style = {"--tag-color": this.attrs.discussion.tags()[0].color(), ...(vnode.attrs.style || {})}
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

  extend(WelcomeHero.prototype, 'view', function (vnode) {
    if (!app.forum.attribute('welcomeHeroBanner')) return;

    vnode.attrs.className += ' Hero--banner';
    vnode.attrs.style = vnode.attrs.style || {};
    vnode.attrs.style['--banner-url'] = `url("${app.forum.attribute('welcomeHeroBanner')}")`;

    if (app.forum.attribute('welcomeHeroBannerPosition')) {
      vnode.attrs.style['--banner-position'] = app.forum.attribute('welcomeHeroBannerPosition');
    }
  });

  extend(TagsPage.prototype, 'view', function (vnode) {
    vnode.attrs.className = vnode.attrs.className.replace('TagsPage', 'Asirem-TagsPage');
    vnode.children[1].attrs.className += ' sideNavContainer';
  });
});
