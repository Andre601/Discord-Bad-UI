---
weight: 6
title: Bug allows posting of empty messages with embeds.
date: 2023-02-12
timeline_icon: material/pencil
tags:
  - desktop
  - appearance
submitted: Andre601
---

Using a combination of specific characters used for markdown formatting, one is able to send a message only depicting an embed without any message by posting any link that produces an embed in Discord.

![empty-message-text](/assets/images/link-embed-bug/empty-message-text.jpg "The text used to post an empty message. Everything after the _ is hidden."){ loading="lazy" }<br>
![empty-message](/assets/images/link-embed-bug/empty-message.jpg "The result with the non-visible link causing an embed to appear, making it look like I used client modifications"){ loading="lazy" }
