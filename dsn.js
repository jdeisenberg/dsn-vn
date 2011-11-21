imgPath = "images/";
audioPath = "sound/";

/* do the preload list later */
var preload = [

];

var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = imgPath + preload[i];
}

var frank;
var roberta;
var narrator;
var playingMusic;
var audioParameters = {src: "dsn_music_loop", format: ["ogg", "mp3", "wav"], loop: true, action: "play"};

var diagram;
var plainBG;

var textArea;
var leftSide
var rightSide;
var center;
var origin;
var bigFont;
var script;

var startItem = ["Start", "Start"];
var privacyItem =  ["Privacy", "Let me read about privacy again"];
var dataItem = ["Your data belongs to you",
    "Let me read about my data again"];
var securityItem = ["Security", "Let me read about security again"];
var currentItem = ["What about my current social networks?",
    "Let me read about my current networks again"];
var readyItem = ["Can I start using this now?",
    "Let me read about using distributed networks again"];

var startSeen = 0;
var privacySeen = 0;
var dataSeen = 0;
var securitySeen = 0;
var currentSeen = 0;
var readySeen = 0;
    
function prepareNovel()
{
    novel.imagePath = "images/";
    novel.audioPath = "sound/";
    frank = new Character('Frank', {color: "#c8ffc8"});
    roberta = new Character('Roberta', {color: "#c8c8ff"});
    narrator = new Character('');
    diagram = new Character('');
    center = new Position(0.5, 0, 0.5, 0);
    origin = new Position(0, 0, 0, 0);
    leftSide = new Position(0, 1, 0, 1);
    rightSide = new Position(1, 1, 1, 1);
    plainBG = "empty.png"; // a plain background
    playingMusic = false;
    
    script = [

    label, "start",
    ifStatement, "startSeen == 0",
        scene, "title_screen.jpg",
        setVars, "startSeen = 1",
        // audio, audioParameters,
        narrator, {say: "<div style='text-align:center'>Please click to start.</div>"},
        /*
        diagram, {image: "dsn_music_button_muted.png", position: center},
        imagemap, { mapId: "musicMap", character: diagram, screenActive: true},
        */
    elsePart, "",
        jump, "sectionMenu",
    endIf, "",
        
    /* Frank and Roberta in office */
    label, "pageOne",
    
    scene, "office.jpg",
    frank,  { image: "frank_default.png", position: leftSide },
    roberta, { image: "roberta_default.png", position: rightSide },
 
    frank, "Hey, Roberta, I keep seeing articles popping up all over about this thing.",
    roberta, "What thing, Frank?",
    
    /*
    frank, {image: "frank_default.png"},
    frank, "Something called &ldquo;distributed social networks.&rdquo; I know what social networks are...",
    */
    frank, {say: "Something called &ldquo;distributed social networks.&rdquo; I know what social networks are..."},
    
    /* icons for facebook, twitter, and myspace */
    scene, "social_network_collage.jpg",
    frank, "Those are sites like Facebook, Twitter, and MySpace.",
    
    background, "office.jpg",
    frank, "",
    roberta, "",
    remove, diagram,
    frank, "But what&#8217;s the big deal about &ldquo;distributed&rdquo;? I have online friends from all over the place.",
    
    roberta, "The &ldquo;distributed&rdquo; refers to where your data lives, and the big deal is that distributed networks put <em>you</em> in control.",
    
    /* Frank, totally confused. Jaw open, "hypnosis eyes", question marks
        above head */
    frank, {image: "frank_confused.png"},
    frank, "Care to explain that in plain English?",
    
    /* closeup of roberta */
    frank, {image: "frank_default.png", position: leftSide},
    roberta, { image: "roberta_default.png", position: rightSide },
    roberta, "Here&rsquo;s how a typical social web site works. Let&rsquo;s call it...",
    
    /* Frank, thinking */
    frank, { image: "frank_thoughtful.png", position: leftSide },
    frank, "Hmm, how about...",
    
    /* Frank, index finger raised, triumphant look on face */
    frank, { image: "frank_default.png"},
    diagram, {image: "friendcenter_logo.png", position: center},
    frank, "FriendCenter!",
    
    /* Roberta, with bland look */
    /* roberta, { image: "roberta_bland.png"}, */
    roberta, "Not very creative, but it&rsquo;ll do.",
    
    scene, "tuan_posting.jpg",
    diagram, {image: "tuan_posting_mask1.png", position: origin},
    roberta, {image: null, avatar: "roberta_default_headshot.png"},
    roberta, "Let&rsquo;s say your friend Tuan makes a post to FriendCenter.",
    
    /* Diagram showing message going to FriendCenter server */
    diagram, {image: "tuan_posting_mask2.png"},
    roberta, "His post goes to FriendCenter&rsquo;s server.",
    
    /* Frank, holding up hands in a warding gesture.*/
    remove, diagram,
    frank, {image: null, avatar: "frank_default_headshot.png"},
    frank, "Whoa! Don’t get all technical on me. What exactly is a server?",
    
    /* Roberta, pointing at her computer.*/
    scene, "server_pic_1.jpg",
    roberta, {image: "roberta_teaching_2.png", avatar: ""},
    roberta, "Just a huge computer (or bunch of computers) that hold humongous amounts of data. It’s called a “server” because...",
    
    /* Frank, as a waiter in a fancy restaurant, carrying a pizza*/
    background, {image: "server_pic_2.jpg", effect: "dissolve"},
    narrator, "...when you ask the server for information, it goes into its “data kitchen” and serves up the data to you.",
    
    /* Frank in foreground; Tuan and message going to server in background*/
    scene, {image: "tuan_posting.jpg", effect: "dissolve"},
    frank, "OK, got it. So Tuan makes a post and it goes to FriendCenter’s server.",
    
    /* Diagram showing Frank signing on (Figure 2)*/
    scene, {image: "frank_reading_tuan_post.jpg"},
    diagram, {image: "frank_reading_tuan_post_mask1.png", position: origin},
    roberta, {image: null, avatar: "roberta_default_headshot.png"},
    roberta, "When you sign on, the server sees that Tuan is in your list of friends...",
    
    diagram, {image: "frank_reading_tuan_post_mask2.png"},
    roberta, "and serves Tuan’s message to you.",
        
    /* Roberta, pointing at Figure 3, showing a graph of all the people and their connections.*/
    // Illusion of Network Connections
    background, {image: "friend_connections_distributed.jpg"},
    remove, diagram,
    roberta, "The illusion is that you are directly connected to Tuan and all your other friends.",
    
    /* Figure 4 (all users connected to a central server)*/
    // Central Server Mediating Connections
    background, {image: "friend_connections_central_server.jpg"},
    roberta, "In reality, the central server manages all of your interactions.",
    
    /* Frank and Roberta*/
    frank, "So, how are these distributed social networks different?",
    roberta, "With a distributed network, there’s no illusion.",
    
    /* Figure 5 (Tuan & Frank with their own servers)*/
    // Tuan and Frank’s Servers
    scene, "frank_and_tuan_direct.jpg",
    diagram, {image: "frank_and_tuan_direct_mask0.png", position: origin},
    narrator, "Both you and Tuan have your own servers.",
    
    /* Figure 6 (Tuan posts to his server)*/
    diagram, {image: "frank_and_tuan_direct_mask1.png"},
    narrator, "Tuan makes his post, and it goes to <em>his</em> server rather than a central server",
    
    /* Figure 7 (link between Frank’s and Tuan’s machine)*/
    // Frank’s Server Connects to Tuan’s Server
    diagram, {image: "frank_and_tuan_direct_mask2.png"},
    narrator, "Your servers communicate directly with each other.",
    
    /* Frank looking at Tuan’s message on terminal; thought balloon has a slice of pizza. Frank is drooling.*/
    diagram, {image: "frank_and_tuan_direct_mask3.png"},
    narrator, "So that when you access your server, you see Tuan’s post.",
    
    /* Frank & Roberta*/
    scene, {image: "office.jpg"},
    frank, {image: "frank_default.png", avatar: "", position: leftSide},
    roberta, {image: "roberta_default.png", avatar: "", position: rightSide},
    frank, "What if I’m at my cousin George’s house? How do I get to my information?",
    roberta, "You access your server from the web, so you can do it anywhere you have an Internet connection.",
    
    /* Roberta, pointing to Figure 8 (entire network)*/
    // Distributed Network of Friends
    diagram, {image: "friend_connections_distributed.jpg", position: origin},
    frank, {image: null, avatar: "frank_default_headshot.png"},
    roberta, {image: null, avatar: "roberta_default_headshot.png"},
    roberta, "Data isn’t centralized—it’s distributed among all the users and their servers.",
    
    /* Frank, with light bulb going on*/
    frank, "Which is why they call it a <b>distributed</b> social network.",
    
    /* Roberta, pointing to Figure 8 (entire network), nodding sagaciously.*/
    roberta, "That’s right! In a distributed network, all the data would not be stored in one company’s server. There’s no single company in control.",
    
    /* Frank, medium CU.*/
    remove, diagram,
    frank, {image: "frank_default.png", avatar: ""},
    roberta, {avatar: ""},
    frank, "What else makes distributed social networks better?",
    
    label, "sectionMenu",
    scene, {image: "office.jpg"},
    frank, {avatar: ""},
    roberta, {avatar: ""},
    menu, [
        "",
        "{{startItem[startSeen]}}", [jump, "pageOne"],
        "{{privacyItem[privacySeen]}}", [jump, "privacy"],
        "{{dataItem[dataSeen]}}", [jump, "yourData"],
        "{{securityItem[securitySeen]}}", [jump, "security"],
        "{{currentItem[currentSeen]}}", [jump, "current"],
        "{{readyItem[readySeen]}}", [jump, "newsToMe"]
        /*
        "{{showMusicIcon()}}", [audio, {src: "dsn_music_loop", format: ["ogg", "mp3", "wav"], loop: true, action: "{{playMusicAction()}}"}, jump, "sectionMenu"]
        */
    ],

    label, "privacy",    
    /* Roberta medium CU, pointing to whiteboard with words “Everyone/Friends of Friends/Friends only"*/
    scene, {image: "office.jpg"},
    roberta, {image: "roberta_default.png", position: rightSide},
    roberta, "With a centralized social network, you may have only a few levels of privacy.",
    
    /* Additional words “Immediate Family/co-workers/Bowling team” shown on whiteboard, crossed out*/
    /*
    background, {image: "whiteboard2.jpg"},
    roberta, "If you want to set up your own groups of friends, you’re out of luck.",
    */
    
    /* Roberta, medium CU*/
    roberta, {image: "roberta_teaching_2.png"},
    roberta, "Also, FriendCenter may choose to change its privacy policies at any time...",
    
    /* Hand pulling back shower curtain to reveal Frank (from chest up) with shampoo in hair, shocked expression on face*/
    hide, roberta,
    background, {image: "no_privacy.jpg"},
    narrator, "...revealing information that you might not want others to see!",
    
    /* Frank, leaning back in chair*/
    background, {image: "office.jpg"},
    show, roberta,
    frank, {image: "frank_default.png", position: leftSide},
    frank, "Yeah, every time one of the big social networks loosens its privacy settings...",
    
    /* Mob of angry peasants bearing pitchforks and torches*/
    hide, frank,
    hide, roberta,
    background, {image: "angry_mob.jpg"},
    narrator, "...people aren’t very happy about it.",
    
    /* Roberta at whiteboard; no group names crossed out.*/
    background, {image: "office.jpg"},
    roberta, {image: "roberta_default.png"},
    show, roberta,
    show, frank,
    roberta, "But with a distributed network, because it’s <em>your</em> server, you get to set up your own groups, and your privacy policy changes only when you want it to.",
    
    /* Roberta draws line on whiteboard between co-workers & bowling team.*/
    roberta, "So that means the people on your bowling team don’t have to get messages about things going on at the office.",
    
    roberta, {image: "roberta_default.png"},
    roberta, "And that&rsquo;s how distributed social networks handle privacy.",
    setVars, "privacySeen = 1;",
    
    scene, "office.jpg",
    menu, [
        "What would you like to do?",
        "Find out why my data belongs to me", [jump, "yourData"],
        "See the other topics", [jump, "sectionMenu"]
    ],
    
    label, "yourData",
    /* Roberta and Frank in frame; Frank is slightly puzzled*/
    scene, {image: "office.jpg"},
    roberta, {image: "roberta_default.png", position: rightSide},
    frank, {image: "frank_default.png", position: leftSide},
    roberta, "On a distributed social network, there&rsquo;s no central server.",
    roberta, "That means you keep control of your data because it&rsquo;s on  <em>your</em> server.",
    frank, "Oh, I already keep copies of all my pictures on my hard disk.",
    
    /* Roberta, medium CU*/
    roberta, "And that&rsquo;s a good thing! But what about those uploaded photos? Those go to the centralized network&rsquo;s server.",
    
    /* Roberta, holding a document filled with fine print*/
    scene, {image: "friendcenter_terms.jpg"},
    /* "You grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any IP content that you post on or in connection with FriendCenter.*/
    roberta, "And that means your data is subject to their terms of service. Take a look at this:",
    
    /* Frank, with jaw agape*/
    frank, {image: "frank_thoughtful.png"},
    frank, "Wow. I never knew that. Gives whole new meaning to “What’s mine is yours.”",
    
    /* Roberta, medium CU*/
    scene, {image: "office.jpg", effect: "dissolve"},
    frank, {image: "frank_default.png"},
    roberta, {image: "roberta_default.png"},
    roberta, "With distributed social networks, “what’s yours is yours.”",
    
    /* [These next panels may be “too much information.”; I have put them on a page by themselves.] Frank, looking slightly panicked.*/
    frank, {image: "frank_confused.png"},
    frank, "Wait a moment. I read an article that says that most of these distributed networks are “open source.” Does that mean that all my data is open to the public?",
    
    /* Roberta, with placating look.*/
    background, {image: "open_source_2.jpg", effect: "dissolve"},
    hide, frank,
    roberta, "“Open Source” just means that the software that runs the server is openly available for you to look at.",
    
    /* In the background is a typical geek working at a computer. This person really does have to look like a techie type.*/
    roberta, "So you can see how the software was written and how it works.",
    
    /* Frank, looking relieved*/
    background, {image: "office.jpg", effect: "dissolve"},
    frank, {image: "frank_default.png", position: leftSide},
    show, frank,
    frank, "Well, since I’m no programmer, there’s no danger of me messing with that!",
    
    /* Roberta*/
    roberta, "Because your pictures and posts aren’t part of the software, your data is still all yours.",
    setVars, "dataSeen = 1",
    menu, [
        "What would you like to do?",
        "Find out about security", [jump, "security"],
        "See the other topics", [jump, "sectionMenu"]
    ],
    
    /* Frank, thinking out loud*/
    label, "security",
    scene, {image: "office.jpg"},
    frank, {image: "frank_default.png", position: leftSide},
    roberta, {image: "roberta_default.png", position: rightSide},
    frank, "So distributed social networks have privacy and data ownership covered. What about security, now that I don’t have a middleman handling it for me?",
    
    roberta, "When your server communicates with Tuan&rsquo;s server...",
    
    /* Two computers; both their screens say “It’s pizza time!”; a wire in between them has nonsense characters like GH&c^n@%72h$ in it*/
    hide, roberta,
    hide, frank,
    roberta, {image: null, avatar: "roberta_default_headshot.png"},
    background, {image: "encryption.jpg"},
    roberta, "The software encrypts all the traffic among the servers.",
    
    background, {image: "encryption_2.jpg"},
    roberta, "That keeps the bad guys from getting your data.",
    
    scene, "office.jpg",
    roberta, {image: "roberta_default.png", avatar: ""},
    show, roberta,
    show, frank,
    roberta, "Some distributed social networks will make sure your messages don&rsquo;t get posted to other, insecure social networks.", 
    frank, {image: "frank_thoughtful.png"},
    frank, "Well, that does bring up a good point...",
    setVars, "securitySeen = 1",
    menu, [
        "What would you like to do?",
        "Continue to see what Frank&rsquo;s point is", [jump, "current"],
        "See the other topics", [jump, "sectionMenu"]
    ],
   
    /* Frank, with mock panic on his face */
    label, "current",
    scene, "office.jpg",
    frank, {image: "frank_clueless.png", position: leftSide},
    roberta, {image: "roberta_frustrated.png", position: rightSide},
    frank, "What about the social networks I use now? I can’t live without Farm Wars...and Mafiaville...and...",
    
    /* Roberta,  interrupting */
    roberta, {image: "roberta_default.png"},
    roberta, "I got it. You don’t have to give up your current social networks. Since services like Facebook and Twitter allow programs to read data,...",
    
    /* Graphic showing Facebook, Twitter, and MySpace icons surrounding distributed network icon. Arrows lead out from distributed network to the services*/
    scene, {image: "server_and_social_networks.jpg"},
    narrator, "...your server will be able to access your data on your current social networks.",
    
    /* Same graphic; arrows pointing inward to distributed network*/
    narrator, "And they will also be able to integrate your server’s data.",
    
    /* Frank in police uniform, holding hand out in “stop” gesture; a traffic barricade is in the background.*/
    scene, {image: "server_and_social_networks_2.jpg"},
    narrator, "But, of course, only if you permit them to.",
    setVars, "currentSeen = 1",
    
    menu, [
        "What would you like to do?",
        "Find out if these networks are ready to use", [jump, "newsToMe"],
        "See the other topics", [jump, "sectionMenu"]
    ],
    
    label, "newsToMe",
    /* Frank, enthusiastic*/
    scene, {image: "office.jpg"},
    frank, {image: "frank_default.png", position: leftSide},
    roberta, {image: "roberta_default.png", position: rightSide},
    frank, "This sounds great. But how come I haven’t heard of it before?",
    
    /* Two guys working at a computer*/
    roberta, "Most of the projects so far have been pretty small...",
    
    /* Roberta, CU*/
    diagram, {image: "diaspora2.png", position: center},
    roberta, "But in summer of 2010, one project named Diaspora caught everyone’s imagination.",
    
    /* Background showing lots of overlapping web pages*/
    roberta, "That’s why you’re seeing all those articles now.",
    
    /* Frank & Roberta*/
    remove, diagram,
    background, {image: "office.jpg"},
    frank, "So, are these distributed networks ready to use right now?",
    
    /* Blueprint, with workers looking at it.*/
    hide, frank,
    background, {image: "projects_planning.jpg"},
    roberta, "Some projects are still in the planning stages.",
    
    /* House being built*/
    background, {image: "projects_building.jpg", effect: "dissolve"},
    roberta, "Others are being built even as we speak.",
    
    /* Roberta and Frank; cozy house in background*/
    background, {image: "projects_done.jpg", effect: "dissolve"},
    roberta, "And some are ready to move into.",
    
    diagram, {image: "ready_dsns.png", position: origin},
    roberta, {image: "", avatar: "roberta_default_headshot.png"},
    roberta, {say: "Friendica, Buddycloud, and diaspora<sup>*</sup> are three distributed social networks that are ready to try out. Click the icons to go to their websites.", noPause: true},
    imagemap, { mapId: "ready_dsns_map", character: diagram, screenActive: true},

	remove, diagram,
    background, {image: "office.jpg"},
    show, frank,
    frank, "So I can’t just go to a website and - presto - my computer becomes a server?",
    
    /* Roberta, plugging in a small computer*/
   roberta, {image: "roberta_default.png", avatar: ""},
   roberta, "No. It’s preferable to set up a second computer to be your server.",
    
    scene, {image: "pioneer.jpg"},
    narrator, "That takes a bit of doing, but it’s a reasonable option for people who have that pioneer spirit.",
    
    /* Fuse blowing as Frank touches the computer*/
    scene, {image: "office.jpg"},
    frank, {image: "frank_clueless.png", position: leftSide},
    frank, "Well, I’m no technical wizard! What choice do I have, then?",

    
    /* Diagram shows a power supply-sized brick*/
    scene, {image: "mini_server.jpg"},
//    hide, roberta,
    hide, frank,
    roberta, {avatar: "roberta_default_headshot.png", image: ""},
    roberta, "Other projects are under way to create a computer the size of a wall plug....",
    
    /* Plug is in the wall, with LCD letters reading "READY"*/
    roberta, "...that already has the software installed to make it act as a server for distributed social networks.",
    
    /* Roberta, at screen, with URLs http://wiki.debian.org/FreedomBox and http://foocorp.net/projects/fooplug/*/
    roberta, "For example, the Freedom Box and FooPlug.",
    
    /* Frank, grimacing*/
    scene, "office.jpg",
    frank, {image: "frank_default.png"},
    roberta, {image: "roberta_default.png", avatar: ""},
    frank, "FooPlug? Must have been some tech guy who came up with that name!",
    
    /* Frank, thoughtful*/
    frank, {image: "frank_thoughtful.png"},
    frank, "But it does sound interesting, and I’ll definitely keep an eye out for it. Just one more thing...",
    
    /* Frank and Roberta; Frank with "puppy-dog eyes", Roberta laughing.*/
    frank, {image: "frank_smiling.png"},
    roberta, {image: "roberta_default.png"},
    frank, "Roberta, when you start using a distributed social networks--will you give me a friend request?",
    roberta, {image: "roberta_smiling.png"},
    roberta, "It’s a deal, Frank.",
    setVars, "readySeen = 1",
    
    label, "the_end",
    scene, "credits.jpg",
    narrator, "<div style='text-align:center'>Thank you for reading our visual novel!</div>",
    jump, "sectionMenu"
  ];
}

function showMusicIcon()
{
    var str;
    
    if (playingMusic)
    {
        str = '<img src="images/dsn_music_button_muted.png" alt="Stop music"/>';
    }
    else
    {
        str = '<img src="images/dsn_music_button.png" alt="Play music"/>';
    }
    return str;
}

function playMusicAction()
{
    var str = (playingMusic) ? "stop" : "play";
    playingMusic = !playingMusic;
    return str;
}

function musicImageClicked()
{
    if (playingMusic)
    {
        stopAudio();
        diagram.domRef.src = "images/dsn_music_button.png";
    }
    else
    {
        audio(audioParameters);
        diagram.domRef.src = "images/dsn_music_button_muted.png";
    }
    playingMusic = !playingMusic;
}

function musicButtonClicked()
{
    var img = document.getElementById("musicButton");
    if (playingMusic)
    {
        stopAudio();
        img.alt = "Turn Music On";
		img.title = "Turn Music On";
        img.src = "images/dsn_music_button_muted.png";
    }
    else
    {
        audio(audioParameters);
        img.alt = "Turn Music Off";
		img.title = "Turn Music Off";
        img.src = "images/dsn_music_button.png";
    }
    playingMusic = !playingMusic;
}
