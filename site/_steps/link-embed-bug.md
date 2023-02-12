---
title: Bug allows postings of empty messages with embeds.
date: 2023-02-12 00:00:00 0000
submitter: Andre601
tags:
  - desktop
---

Using a [specific combination of spoilers and underlines]() allows you to post an empty text. Posting links that way will still render embeds, making it look like you used a form of automation to post embeds without message content.

![Embed issue showcase](/assets/images/link-embed-bug/embed-bug.jpg "A message where the content (A link) is not visible, yet the embed is still rendered.")
![Embed issue text](/assets/images/link-embed-bug/embed-bug-showcase.jpg "The text used to create the bugged messages. It's a collection of | and at the end a few _ with the text in it.")