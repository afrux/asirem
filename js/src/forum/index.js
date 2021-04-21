import { extend } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import DiscussionHero from 'flarum/forum/components/DiscussionHero';
import WelcomeHero from 'flarum/forum/components/WelcomeHero';
import UserCard from 'flarum/forum/components/UserCard';
import TagHero from 'flarum/tags/components/TagHero';

app.initializers.add('sycho/flarum-asirem', () => {
  let tags;
  extend(DiscussionListItem.prototype, 'view', function (vnode) {
    const discussionListItemContent = vnode.children.find(e => e.tag === 'div' && e.attrs && e.attrs.className.includes("DiscussionListItem-content"));

    discussionListItemContent.children[0] = (
      <div className="DiscussionListItem-author-container">{[discussionListItemContent.children[0], discussionListItemContent.children[1]]}</div>
    );

    delete discussionListItemContent.children[1];

    discussionListItemContent.children[3] = (
      <div className="DiscussionListItem-stats">{discussionListItemContent.children[3]}</div>
    );

    const items = this.infoItems();

    if (! tags) return;

    vnode.children[2] = <div className="DiscussionListItem-tags">{tags}</div>;
    vnode.children.push(discussionListItemContent);
  });

  extend(DiscussionListItem.prototype, 'infoItems', (items) => {
    if (!items.has('tags')) return;

    tags = items.get('tags');
    items.remove('tags');
  });

  [
    (TagHero && TagHero.prototype) || null,
    WelcomeHero.prototype,
    DiscussionHero.prototype,
    UserCard.prototype
  ].map(prototype => {
    if (!prototype) {
      return;
    }

    extend(prototype, 'view', function (vnode) {
      if (prototype === UserCard.prototype && !this.attrs.className.includes('Hero')) {
        return;
      }

      vnode.children.push(
        <svg width="1440" height="320" className="Asirem-forumWaves">
          <path d="M0,32L10.9,69.3C21.8,107,44,181,65,224C87.3,267,109,277,131,250.7C152.7,224,175,160,196,128C218.2,96,240,96,262,117.3C283.6,139,305,181,327,181.3C349.1,181,371,139,393,112C414.5,85,436,75,458,69.3C480,64,502,64,524,101.3C545.5,139,567,213,589,234.7C610.9,256,633,224,655,186.7C676.4,149,698,107,720,90.7C741.8,75,764,85,785,106.7C807.3,128,829,160,851,144C872.7,128,895,64,916,42.7C938.2,21,960,43,982,80C1003.6,117,1025,171,1047,176C1069.1,181,1091,139,1113,122.7C1134.5,107,1156,117,1178,133.3C1200,149,1222,171,1244,165.3C1265.5,160,1287,128,1309,112C1330.9,96,1353,96,1375,117.3C1396.4,139,1418,181,1429,202.7L1440,224L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z"></path>
        </svg>
      );
    })
  });
});
