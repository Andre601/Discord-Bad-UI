---
title: Bug allows postings of empty messages with embeds.
date: 2023-02-12 12:37:00 0100
submitter: Andre601
tags:
  - desktop
---

Using a [specific combination of spoilers and underlines](https://pastebin.com/NLxd4pg0) allows you to post an empty text. Posting links that way will still render embeds, making it look like you used a form of automation to post embeds without message content.

[![embed issue text]][embed issue text]  
[![embed issue showcase]][embed issue showcase]

[embed issue text]: /assets/images/link-embed-bug/empty-message-text.jpg "The text used to post an empty message. Everything after the _ are hidden."
[embed issue showcase]: /assets/images/link-embed-bug/empty-message.jpg "The result with the non-visible link causing an embed to appear, making it look like I used client modifications."