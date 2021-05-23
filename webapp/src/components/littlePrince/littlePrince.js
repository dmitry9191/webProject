import React from 'react';
import hroznys from './img/hroznys.jpg';
import klobouk from './img/klobouk.jpg';
import slon from './img/slon.jpg';
import malyPrince from './img/malyPrinc.jpg';
import nemocnyBeranek from './img/nemocnyBeranek.jpg';
import beranek from './img/Beran.jpg';
import staryBeranek from './img/staryBeranek.jpg';
import krabice from './img/krabice.jpg';



const LittlePrince = () => {
    return (
        /* <header></header> */
        /* <nav></nav> navigation*/
        /* <article>Оформление записи в блоге</article> */
        /* <section>Секции на сайте</section> */
        /* <aside>Боковая колонка с инфо</aside> */
        /* <main>Главное содержимое сайта</main> */
        /* <address>Адрес сайта</address> */
        /* <footer>Подвал сайта</footer> */
        /* <mark></mark> <wbr> <time></time> */
        <div>
            <h1>Antoine de Saint Exupéry - The little prince</h1>
            <h2>TO LEON WERTH</h2>
            <p>I ask the indulgence of the children who may read this book for dedicating it to a grown-up. I have a serious reason: he is the best friend I have in the world. I have another reason: this grown-up understands everything, even books about children. I have a third reason: he lives in France where he is hungry and cold. He needs cheering up. If all these reasons are not enough, I will dedicate the book to the child from whom this grown-up grew. All grown-ups were once children - although few of them remember it. And so I correct my dedication:</p>
            <h2>TO LEON WERTH WHEN HE WAS A LITTLE BOY</h2>
            <hr />
            <ol type="I">
                <li>
                    <p>Once when I was six years old I saw a magnificent picture in a book, called <i>True Stories from Nature</i>, about the primeval forest. It was a picture of a boa constrictor in the act of swallowing an animal. Here is a copy of the drawing.</p>
                    <img src={hroznys} alt={"hroznys"} />
                    <p>In the book it said: <i>"Boa constrictors swallow their prey whole, without chewing it. After that they are not able to move, and they sleep through the six months that they need for digestion.</i>"</p>
                    <p>I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing. My Drawing Number One. It looked something like this:</p>
                    <img src={klobouk} alt={"klobouk"} />
                    <p>I showed my masterpiece to the grown-ups, and asked them whether the drawing frightened them.</p>
                    <p>But they answered: <i>"Frighten? Why should any one be frightened by a hat?"</i></p>
                    <p>My drawing was not a picture of a hat. It was a picture of a boa constrictor digesting an elephant. But since the grown-ups were not able to understand it, I made another drawing: I drew the inside of a boa constrictor, so that the grown-ups could see it clearly. They always need to have things explained. My Drawing Number Two looked like this:</p>
                    <img src={slon} alt={"slon"} />
                    <p>The grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to them.</p>
                    <p>So then I chose another profession, and learned to pilot airplanes. I have flown a little over all parts of the world; and it is true that geography has been very useful to me. At a glance I can distinguish China from Arizona. If one gets lost in the night, such knowledge is valuable.</p>
                    <p>In the course of this life I have had a great many encounters with a great many people who have been concerned with matters of consequence. I have lived a great deal among grown-ups. I have seen them intimately, close at hand. And that hasn't much improved my opinion of them.</p>
                    <p>Whenever I met one of them who seemed to me at all clear-sighted, I tried the experiment of showing him my Drawing Number One, which I have always kept. I would try to find out, so, if this was a person of true understanding. But, whoever it was, he, or she, would always say:</p>
                    <p><i>"That is a hat."</i></p>
                    <p>Then I would never talk to that person about boa constrictors, or primeval forests, or stars. I would bring myself down to his level. I would talk to him about bridge, and golf, and politics, and neckties. And the grown-up would be greatly pleased to have met such a sensible man.</p>
                </li>
                <hr></hr>
                <li>
                    <p>So I lived my life alone, without anyone that I could really talk to, until I had an accident with my plane in the Desert of Sahara, six years ago. Something was broken in my engine. And as I had with me neither a mechanic nor any passengers, I set myself to attempt the difficult repairs all alone. It was a question of life or death for me: I had scarcely enough drinking water to last a week.</p>
                    <p>The first night, then, I went to sleep on the sand, a thousand miles from any human habitation. I was more isolated than a shipwrecked sailor on a raft in the middle of the ocean. Thus you can imagine my amazement, at sunrise, when I was awakened by an odd little voice. It said:</p>
                    <p><i>"If you please--draw me a sheep!"</i></p>
                    <p><i>"If you please--draw me a sheep!"</i></p>
                    <p><i>"Draw me a sheep!"</i></p>
                    <p>I jumped to my feet, completely thunderstruck. I blinked my eyes hard. I looked carefully all around me. And I saw a most extraordinary small person, who stood there examining me with great seriousness. Here you may see the best portrait that, later, I was able to make of him. But my drawing is certainly very much less charming than <s>its</s> model.</p>
                    <img src={malyPrince} alt={"malyPrince"} />
                    <p>That, however, is not my fault. The grown-ups discouraged me in my painter's career when I was six years old, and I never learned to draw anything, except boas from the outside and boas from the inside.</p>
                    <p>Now I stared at this sudden apparition with my eyes fairly starting out of my head in astonishment. Remember, I had crashed in the desert a thousand miles from any inhabited region. And yet my little man seemed neither to be straying uncertainly among the sands, nor to be fainting from fatigue or hunger or thirst or fear. Nothing about him gave any suggestion of a child lost in the middle of the desert, a thousand miles from any human habitation. When at last I was able to speak, I said to him:</p>
                    <p><i>"But--what are you doing here?"</i></p>
                    <p>And in answer he repeated, very slowly, as if he were speaking of a matter of great consequence:</p>
                    <p><i>"If you please--draw me a sheep..."</i></p>
                    <p>When a mystery is too overpowering, one dare not disobey. Absurd as it might seem to me, a thousand miles from any human habitation and in danger of death, I took out of my pocket a sheet of paper and my fountain-pen. But then I remembered how my studies had been concentrated on geography, history, arithmetic and grammar, and I told the little chap (a little crossly, too) that I did not know how to draw. He answered me:</p>
                    <p><i>"That doesn't matter. Draw me a sheep..."</i></p>
                    <p>But I had never drawn a sheep. So I drew for him one of the two pictures I had drawn so often. It was that of the boa constrictor from the outside. And I was astounded to hear the little fellow greet it with:</p>
                    <p><i>"No, no, no! I do not want an elephant inside a boa constrictor. A boa constrictor is a very dangerous creature, and an elephant is very cumbersome. Where I live, everything is very small. What I need is a sheep. Draw me a sheep."</i></p>
                    <p>So then I made a drawing.</p>
                    <img src={nemocnyBeranek} alt={"nemocnyBeranek"} />
                    <p>He looked at it carefully, then he said:</p>
                    <p><em>"No. This sheep is already very sickly. Make me another."</em></p>
                    <p>So I made another drawing.</p>
                    <img src={beranek} alt={"beranek"} />
                    <p>My friend smiled gently and indulgently.</p>
                    <p><i>"You see yourself," he said, "that this is not a sheep. This is a ram. It has horns."</i></p>
                    <p>So then I did my drawing over once more.</p>
                    <p>But it was rejected too, just like the others.</p>
                    <p><em>"This one is too old. I want a sheep that will live a long time."</em></p>
                    <img src={staryBeranek} alt={"staryBeranek"} />
                    <p>By this time my patience was exhausted, because I was in a hurry to start taking my engine apart. So I tossed off this drawing.</p>
                    <img src={krabice} alt={"krabice"} />
                    <p>And I threw out an explanation with it.</p>
                    <p><i>"This is only his box. The sheep you asked for is inside."</i></p>
                    <p>I was very surprised to see a light break over the face of my young judge:</p>
                    <p><i>"That is exactly the way I wanted it! Do you think that this sheep will have to have a great deal of grass?"</i></p>
                    <p><i>"Why?"</i></p>
                    <p><i>"Because where I live everything is very small..."</i></p>
                    <p><i>"There will surely be enough grass for him," I said. "It is a very small sheep that I have given you."</i></p>
                    <p>He bent his head over the drawing.</p>
                    <p><i>"Not so small that--Look! He has gone to sleep..."</i></p>
                    <p>And that is how I made the acquaintance of the little prince.</p>
                </li>
            </ol>
        </div>
    )
}

export default LittlePrince;