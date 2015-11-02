(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "EndercraftNetworkBot",
        language: "english",
        chatLink: null,
        maximumAfk: null,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: false,
        commandCooldown: 60,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme and was skipped, if you carry on you will be banned. "],
            ["op", "This song is on the OP list or on the BlackList (Banned songs) and was skipped, if you carry on you will be banned. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules, Please do not play these if you carry on you will be banned. "],
            ["sound", "The song you played had bad sound quality or no sound, Please find one with sound or better sound quality. "],
            ["nsfw", "The song you contained was NSFW (image or sound) and what skipped, if you carry on you will be banned. "],
            ["unavailable", "The song you played was not available for some users and was skipped, please try find one what works. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: null,
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: "These are the op Songs and WILL be skiped",
        rulesLink: www.ecb-mc.net, Real link coming soon Making ETA two weeks 
        themeLink: Coming soon,
        fbLink: Coming soon as a twitter link not Facebook,
        youtubeLink: Coming soon,
        website: "ecb-mc.net",
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
