import { remoteConfig } from './fb'

remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600,
};

// set default values
remoteConfig.defaultConfig = ({
  'about_title': 'About Pro Flutter',
  'about_text': 'Flutter is UI toolkit for Android, iOS, Desktop and Web which lets you create application for mulitple platforms from one codebase. Together we can become pro flutter developer and take your flutter applications on a whole nother level.',
  'about_first_card_title': 'about_first_card_title',
  'about_first_card_text': 'about_first_card_text',
  'about_second_card_title': 'about_second_card_title',
  'about_second_card_text': 'about_second_card_text',
  'about_third_card_title': 'about_third_card_title',
  'about_third_card_text': 'about_third_card_text',
  'newsletter_title': 'Sign up for Newsletter',
  'newsletter_text': 'Join our squad and be notified about all news. Master your skills with us.',
});

// get and update content
remoteConfig.fetchAndActivate().then(() => {
  for (const key of Object.keys(remoteConfig.defaultConfig)) {
    const el = document.getElementById(key);
    el.innerText = remoteConfig.getValue(key)._value;
  }
});


