---
random_subtitle: true

hide:
  - navigation
  - toc

timeline:
- icon: 'material/cellphone'
  title: Embeds display way larger than their content
  sub_title: 27/02/2023
  slug: 'embed-size-issues'
  images:
    - src: 'assets/images/embed-sizes/embed-size.jpg'
      alt: 'embed-size'
      title: 'An embed from a Discord Webhook Message with a height that is much larger than the actual content the embed has.'
  content: |
    Using the Android App, Embeds may show with a much larger height than the content itself.
- icon: 'material/pencil'
  title: Messages can have a bugged <code>(edited)</code> text position
  sub_title: 12/02/2023
  slug: 'bugged-edited-message'
  images:
    - src: assets/images/edit-bug/normal-message.jpg
      alt: normal-message
      title: The message before it was edited.
    - src: assets/images/edit-bug/bugged-message.jpg
      alt: bugged-message
      title: The edited message using the content provided by the aforementioned site for the bugged (edited) text.
  content: |-
    Using a <a href="https://lingojam.com/Discord(edited)Glitch" target="_blank" rel="nofollow noopener noreferral">specific website</a> someone can create a bugged <code>(edited)</code> tag, where its position is moved to wherever you put the "(edited)" text in the site.
- icon: 'material/pencil'
  title: Bug allows posting of empty messages with embeds.
  sub_title: 12/02/2023
  slug: 'empty-message-bug'
  images:
    - src: assets/images/link-embed-bug/empty-message-text.jpg
      alt: empty-message-text
      title: The text used to post an empty message. Everything after the _ is hidden.
    - src: assets/images/link-embed-bug/empty-message.jpg
      alt: empty-message
      title: The result with the non-visible link causing an embed to appear, making it look like I used client modifications
  content: |-
    Using a <a href="https://pastebin.com/NLxd4pg0" target="_blank" rel="nofollow noopener noreferral">specific combination of spoilers and underlines</a> allows you to post an empty text. Posting links that way will still render embed, making it look like you used a form of automation or API access to post embeds without message content.
- icon: 'material/cellphone'
  title: Codeblock barely noticable on Mobile
  sub_title: 12/02/2023
  slug: 'invisible-code-blocks'
  images:
    - src: assets/images/codeblock-issue/codeblock-issue.jpg
      alt: codeblock-issue.jpg
      title: Screenshot showing an embed with a code block where only the outline and a monospaced font is noticable.
  content: On the Mobile version of Discord are Code blocks (or inline code) barely noticable. The only thing is a thin outline for the code block and a slightly different monospaced font.
- icon: 'simple/discord'
  title: Inconsistent Emojis in Channel names
  sub_title: 23/12/2022
  slug: 'inconsistent-emojis'
  content: |-
    A long standing issue in Discord is, that emojis are inconsistent when used in channel names, as Discord is using the Unicode version instead of the Twemoji version they usually use in the chats messages.<br>
    <br>
    This exists since basically the start and <a href="https://www.reddit.com/r/discordapp/comments/ztej0n/why_does_discord_change_some_emojis_in_channel/" target="_blank" rel="nofollow noopener noreferral">still confuses people to this day</a>.
- icon: 'material/cellphone'
  title: Android app gets slowed down by gifs
  sub_title: 17/12/2022
  slug: 'android-app-slowed-down-by-gif'
  content: |-
    In a more recent update of the Android app can certain gifs cause the app to slow down (lag) significantly, while also <a href="https://twitter.com/TrueAndre_601/status/1603794219713560576" target="_blank" rel="nofollow noopener noreferral">making the phone heat up</a>.<br>
    <br>
    In addition is the a11y (accessability) setting for auto-playing gifs ignored for gifs inside embeds, resulting in gifs playing while the setting is set to "off".
- icon: 'material/cellphone'
  title: Discord changes Android App from Java/Kotlin to react
  sub_title: 24/08/2022
  slug: 'android-switch-to-react'
  content: |-
    Discord has changed their Android app from being made in Java/Kotlin to be made with React.<br>
    The main reason was to remove the gap between the iOS and Android app to have a single team working on both platforms.<br>
    <br>
    The result howver, was a <a href="https://www.reddit.com/r/discordapp/comments/ww49wj/my_issues_with_the_reactbased_android_app/" target="_blank" rel="nofollow noopener noreferral">huge collection of bugs</a> that could be encountered without any provocation on your end. Some of them still exist to this day and <a href="https://twitter.com/TrueAndre_601/status/1603794219713560576" target="_blank" rel="nofollow noopener noreferral">new ones are encountered too</a>.
- icon: 'simple/discord'
  title: Discord's new Brand redesign
  sub_title: 13/05/2021
  slug: 'discord-brand-redesign'
  content: |-
    On the 13th of May did <a href="https://discord.com/blog/happy-blurpthday-to-discord-a-place-for-everything-you-can-imagine" target="_blank" rel="nofollow noopener noreferral">Discord announce their new redesign</a>, which included changes to a lot of things, such as their Logo called "clyde" and even the Watermark.<br>
    This decision encountered quite a bit of backlash including complains about <a href="https://support.discord.com/hc/en-us/community/posts/1500001050842-New-layout-extremely-hostile-towards-people-with-disabilities" target="_blank" rel="nofollow noopener noreferral">possible a11y issues</a> with the new contrasts and colour schemes.
---

<h1 style="text-align: center;">Discord has good UI design</h1>

This website lists all the "great" design decisions made by Discord in the past and even now.  
Note that the goal is not to attack anyone at Discord, but to simply show and poke fun at the mistakes they make.

Concept is inspired by the (Now sunsetted) website [Twitter is going great!](https://twitterisgoinggreat.com){ target="_blank" rel="nofollow noopener noreferral" }.

<center>

[:material-pencil: Submit new Entry](https://github.com/hasgoodui-design/discord/issues){ .md-button .md-button--discord }

</center>

----