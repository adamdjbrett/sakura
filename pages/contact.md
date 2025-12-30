---
layout: base.njk
title: Contact
permalink: /contact/
---

# Contact

Get in touch with us! Send us a message below.

## Contact Form

<form method="POST" action="https://formspree.io/f/your-form-id">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Message</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Send Message</button>
</form>

*Note: Update the form action with your Formspree ID or another form service.*
