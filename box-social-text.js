const boxSocialText = `"Do you know where I put my gold paint, Auntie?"

She painted some. Swans under bridges with water lilies. Old ladies at windows reading lugubrious Bibles. Tonight she was decorating a shoe-box for the box-social they were having at the school the next night.

No one expected her to come. She had been quite ill for the last three weeks and hadn't appeared at the last Institute meeting; now, however, she felt well enough. She was a bit pale and looked much thinner, but she simply had to go. All that evening she sat in the kitchen cutting up old scraps of wallpaper and pasting them on the shoe-box, in various patterns with flour paste. Her box of lunch would be the prettiest there and the men would bid so high for it.

All she needed now was some gold paint, but of course Aunt had gone to bed hours ago.

If Sylvia had any profession at all, it was doing pretty little things like this. Little useless things, for her real vocation had apparently been to stay home and help her aunt with the housework. What she needed now was something to line the box with. It would look so much more beautiful with the sandwiches and the little bottle of olives set against some deep rich colour. Shoe-boxes were so wonderfully white.

The rain was falling in soft applause outside.

Her fingers were white from the paste she had been using. The candle in her hand sprouted a yellow willow leaf. She was in the outhouse searching in the tiny attic for a roll of gorgeous parlour wallpaper she remembered her aunt having left there. Her father always forgot to put down the lids; the two holes stared at her like a man with a large eye and a small one. Finding what she wanted, she stepped out and stood still for a moment. The rain slopped the candle out.

There was the wind in the elderberry bushes; the little things were breathing as hard as if they were swimming across the North Sea, and another sound—that of Saint James' bells all the way from town. Some notes were lost but she gathered it must be twelve. No clock should have any less to say than twelve, unless it were one at such an hour, so silent and so black.

Twelve black strokes: twelve black hair-ribbons.

She walked along the fence beneath the fir trees a bit. The nightshade berries grew here with their wicked fruit. The very next field was lined with furrows as if it had been a large frown or a copy-book. It was not her father's field. Someone else had plowed it. Furrow after furrow after furrow his house lay away where he now lay sleeping and she hated him. Then, her own house—a faint pale light from the two kitchen windows. There the decorated shoe-box lay almost ready for the box-social. Every room of the house, both in their ancient, and modern styles met in parliament on its flat thin sides.

Already the event, the box-social gleamed in the distance like a lantern at the end of a dark stable.

There were half a dozen cars parked at the school. Cars have such beautiful behinds with ruby-red roses that wink at you. Sylvia walked across the fields; neither her aunt nor her father wished to go. She held the precious box in her arms. It was wrapped in brown paper to protect it from the rain.

Why you're better.

Yes. I am.

There were thirty people there; no one was as pale as she was. She looked like the queen on a playing card—in her rich red dress holding the gay box in her lap. All the children's desks were cowering in one corner, for there was to be dancing. Already somebody was sprinkling boracic acid on the floor. Not that it really makes the floor slippery, but everyone is so sure that it does and it feels that much more exciting.

The fiddler played six tunes (he only knew five). Mrs. Twite wasn't dancing at all, not even with her husband, because they used the school as a Sunday school on Sundays and it would be like dancing in a church. Then, out stole a little green table, and then another green table and another and another; everyone was playing euchre until they should dance again.

I pass, paleface; joker.

They wouldn't be dancing now until after the lunch. Mr. Deloney (one of the three farmers in the neighbourhood who owned a silo) was arranging the boxes on the teacher's desk. Sylvia was very careful with her hands lest she eat them. And the teacher had pinned up the Winter ornamental border above the west blackboard with all the gay coaches galloping from the north of the room to the south.

This lovely box wrapped in green. What young gentleman wants to eat with a pretty young lady who has wrapped her box in green?

All the men crowded up.

Hers was almost the last and he was bidding for it. Five dollars; it had looked so nice. He came straight to her.

"I knew it was yours—recognized the wallpaper. Very pretty. You aren't mad at me anymore?"

He sat down quite comfortably and began untying the black ribbons. The school clock that they had both looked at together to see if it were recess time ticked loudly above them.

He lifted the lid and sat staring at what lay inside. His great hands unusually white on the top of the green baize card table.

And between them the little shoe-box glistened with scarlet wallpaper and gilt like a fairy coffin. Inside it, there was the crabbed corpse of a still-born child wreathed in bloody newspaper.

"I hated you so much," she said softly.
`

const bowSocialLowerCaseText = boxSocialText.toLowerCase();

const boxSocialRepairText = bowSocialLowerCaseText
    .replaceAll('"', '')
    .replaceAll('--', '')
    .replaceAll('?', '')
    .replaceAll(")", '')
    .replaceAll('!', '')
    .replaceAll('.', '')
    .replaceAll(',', '')
    .replaceAll(';', '')
    .replaceAll('_', '')
    .replaceAll('-', '')
    .replaceAll('—', '')
    .replaceAll('“', '')
    .replaceAll('”', '')
    .replaceAll('(', '');