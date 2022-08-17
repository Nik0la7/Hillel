let body = `<p> Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship. 

The tracks go off in this direction. Look, sir -- droids. Wake up! Wake up! We're doomed. Do you think they'll melt us down? Don't shoot! Don't shoot! Will this never end? Luke, tell Owen that if he gets a translator to be sure it speaks Bocce. 

I want to learn the ways of the Force and become a Jedi like my father. Mos Eisley Spaceport. You will never find a more wretched hive of scum and villainy. We must be cautious. 

Do you know what he's talking about? Well, I wonder if he's related to Ben. That old man's just a crazy old wizard. Tomorrow I want you to take that R2 unit into Anchorhead and have its memory flushed. That'll be the end of it. It belongs to us now. But what if this Obi-Wan comes looking for him? He won't, I don't think he exists any more. 

I'll see what I can do. You know, between his howling and your blasting everything in sight, it's a wonder the whole station doesn't know we're here. Bring them on! I prefer a straight fight to all this sneaking around. We found the computer outlet, sir. </p>`;

`one. two. three. four.`

function changeText (item) {
    let block = document.createElement('div');
    let quant = 0;
    let arr = item.split(" ").map((letter) => {
        if (letter.length > 7) {
            return '<span style="background: yellow;">' + letter + '</span>';
        }
        return letter;
    });
    quant = `The summ of words equals ${arr.length} <br>`;
    arr = arr.join(" ");
    arr = arr.split(". ").map((sentenses) => {
        return `${sentenses} <br>`;
    }).join(" ");
    let findSmile = arr.replaceAll('?', '🤔');
    findSmile = findSmile.replaceAll('!', '😲');
    block.innerHTML = quant + findSmile;
    document.body.append(block);

    let link = document.createElement('a');
    link.href = "https://forcemipsum.com/";
    link.innerText = "https://forcemipsum.com/";
    document.body.append(link);
}
changeText(body);