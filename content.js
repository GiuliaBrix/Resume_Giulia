/*
  Content for Giulia Brizzi's portfolio.
  Edit this file to update the site. index.html never needs to change for these updates.

  githubUser   Your GitHub username. The GitHub section then lists your public
               repositories automatically (forks and archived repos are hidden).
  hideRepos    Names of public repositories you don't want to show.

  publications Shown in "Selected publications", newest first. One entry per paper:
    y     year
    a     authors, exactly as you want them printed
    t     title
    v     journal / venue, volume, pages
    doi   DOI without "https://doi.org/". Only papers WITH a doi are shown.
    tags  one or more of: 'body' (VR & body), 'ed' (Eating disorders),
          'cyber' (Cyberdelics), 'ai' (AI & ML), 'rehab' (Neuro & rehab),
          'cyb' (Cyberpsychology)
    conf  optional, true for conference proceedings

  To add a paper: copy one line, paste it at the top of the list, change the values.
*/
window.CONTENT = {
  githubUser: 'GiuliaBrix',

  // Repositories to leave out of the GitHub section (for example this website itself)
  hideRepos: ['Resume_Giulia'],

  publications: [
    {y:2026,a:'Brizzi, G., Romeu-Garcia, A., Rocher, J., & Riva, G.',t:'PRISM Project—Predictive-Processing Reshaping via Immersive Simulated Multisensory Experiences',v:'Cyberpsychology, Behavior, and Social Networking, 0(0)',doi:'10.1177/21522715261497426',tags:['body', 'cyb']},
    {y:2026,a:'Felnhofer, A., Schöttler, M., Genovese, L. A., Martinek, D., Pazour, P., Hlavacs, H., Aberle, J. S., Sansoni, M., Invernizzi, A., Erba, M., Brizzi, G., Pizzoli, S. F. M., Riva, G., & Di Lernia, D.',t:'Modulating pain via virtual-reality-based interoceptive modeling: a randomized crossover experiment in an all-female sample',v:'The Journal of Pain, 27(10), 106450',doi:'10.1016/j.jpain.2026.106450',tags:['body']},
    {y:2026,a:'Brizzi, G., Boltri, M., Borsci, S., Chan, R. W., Yildirim, F., Truijen, S., Riva, G., & Scataglini, S.',t:'A multidisciplinary systematic review for the role of digital human models in assessing and treating altered body experience in eating disorders',v:'Computers in Human Behavior Reports, 24, 101360',doi:'10.1016/j.chbr.2026.101360',tags:['ed','body']},
    {y:2026,a:'Sansoni, M., Portingale, J., De Gaspari, S., Brizzi, G., Chorzępa, M., & Riva, G.',t:"Blurring the boundaries of the self: Instagram's impact on bodily identity and multisensory experience among young adults",v:'Computers in Human Behavior, 183',doi:'10.1016/j.chb.2026.109054',tags:['body','cyb']},
    {y:2026,a:'Meregalli, V., Cona, G., Brizzi, G., Granziol, U., Gentili, S., Guante Henriquez, D., Grimaldi, D. A., Gugliotta, A. A., Salvucci, M., Favaro, A., & Collantoni, E.',t:'Modulating implicit food-related tendencies via repetitive TMS of the intraparietal sulcus. A proof-of-concept study for a novel therapeutic target in eating disorders',v:'Biological Psychology, 205, 109216',doi:'10.1016/j.biopsycho.2026.109216',tags:['ed','rehab']},
    {y:2026,a:'Riva, G., Brizzi, G., Rastelli, C., & Greco, A.',t:'AI-generated virtual psychedelics bridge digital and therapeutic frontiers in mental health research',v:'Nature Mental Health, 4, 183–185',doi:'10.1038/s44220-025-00576-3',tags:['cyber','ai']},
    {y:2025,a:'Boltri, M., Brizzi, G., Brusa, F., Gabutti, C., Cera, G., Scalia, A., Manzo, F., Apicella, E., Castelnuovo, G., Riva, G., & Mendolicchio, L.',t:'Virtual reality-based running exposure to target the acute urge to be physically active in anorexia nervosa: a case series',v:'Neuropsychobiology',doi:'10.1159/000547031',tags:['ed','body']},
    {y:2025,a:'Brizzi, G., Pupillo, C., Sajno, E., Boltri, M., Brusa, F., Scarpina, F., Mendolicchio, L., & Riva, G.',t:'Predicting anorexia nervosa treatment efficacy: an explainable machine learning approach',v:'Journal of Eating Disorders, 13(1), 97',doi:'10.1186/s40337-025-01265-3',tags:['ed','ai']},
    {y:2025,a:'Brizzi, G., Boltri, M., Guglielmini, R., Castelnuovo, G., Mendolicchio, L., & Riva, G.',t:'Therapeutic immersion: a single-subject study on virtual reality multisensory experiences for mitigating body disturbance in anorexia nervosa',v:'Eating and Weight Disorders – Studies on Anorexia, Bulimia and Obesity',doi:'10.1007/s40519-025-01740-5',tags:['ed','body']},
    {y:2025,a:'Brizzi, G., Pupillo, C., Rastelli, C., Greco, A., Bernardelli, L., Di Natale, A. F., … Riva, G.',t:'Cyberdelics: virtual reality hallucinations modulate cognitive-affective processes',v:'Dialogues in Clinical Neuroscience, 27(1), 1–12',doi:'10.1080/19585969.2025.2499459',tags:['cyber']},
    {y:2025,a:'Frisone, F., Brizzi, G., Sansoni, M., Di Natale, A. F., Pizzoli, S. F. M., Stanghellini, G., & Riva, G.',t:'Autobiographical memory in feeding and eating disorders: a systematic review',v:'Psychopathology, 58(1), 44–68',doi:'10.1159/000540901',tags:['ed']},
    {y:2024,a:'Brizzi, G., Pupillo, C., Rastelli, C., Antonino, G., Di Natale, A. F., Pizzoli, S. M., Sajno, E., Ubaldi, A., Frisone, F., Riva, G., & Di Lernia, D.',t:'Exploring the relaxing effects of hallucinatory simulated experiences in virtual reality: a pilot study',v:'Annual CyberPsychology, CyberTherapy & Social Networking Conference',conf:true,tags:['cyber']},
    {y:2024,a:'Frisone, F., Cosenza, M., Brizzi, G., & Riva, G.',t:'Click, buy, repeat: understanding the psychological and behavioral mechanisms of online shopping behavior',v:'Cyberpsychology, Behavior, and Social Networking',doi:'10.1089/cyber.2024.0540',tags:['cyb']},
    {y:2024,a:'Brizzi, G., & Riva, G.',t:'Playing with spatial frames: altering the body matrix through multisensory egocentric and allocentric body illusions',v:'Human Behavior and Emerging Technologies',doi:'10.1155/2024/7316063',tags:['body']},
    {y:2024,a:'Brizzi, G., Frisone, F., Rossi, C., & Riva, G.',t:'Gender differences in bodily experience: insights from virtual reality body illusion',v:'Acta Psychologica',doi:'10.1016/j.actpsy.2024.104386',tags:['body']},
    {y:2024,a:'Di Natale, A. F., Pizzoli, S. F. M., Brizzi, G., Di Lernia, D., Frisone, F., Gaggioli, A., Rabarbari, E., Oasi, O., Repetto, C., Rossi, C., Scerrati, E., Villani, D., & Riva, G.',t:'Harnessing immersive virtual reality: a comprehensive scoping review of its applications in assessing, understanding, and treating eating disorders',v:'Current Psychiatry Reports',doi:'10.1007/s11920-024-01523-2',tags:['ed','body']},
    {y:2024,a:'Brizzi, G., Riva, G., & Romano, D.',t:'The Body Image Virtual Reality Assessment (BIVRA): measuring the body representation through virtual reality',v:'Journal of Neuropsychology',doi:'10.1111/jnp.12366',tags:['body']},
    {y:2024,a:'Frisone, F., Brizzi, G., & Riva, G.',t:'VR-MEM: harnessing virtual reality for autobiographical memory enhancement in high school settings',v:'Cyberpsychology, Behavior, and Social Networking, 27(1), 91–93',doi:'10.1089/cyber.2023.29300.ceu',tags:['cyb']},
    {y:2023,a:'Brizzi, G., Sansoni, M., Sajno, E., De Gaspari, S., Di Lernia, D., & Riva, G.',t:'Allocentric full body illusion extends peripersonal space',v:'Annual CyberPsychology, CyberTherapy & Social Networking Conference',conf:true,tags:['body']},
    {y:2023,a:'Sajno, E., Rossi, A., De Gaspari, S., Sansoni, M., Brizzi, G., & Riva, G.',t:'XAI in affective computing: a preliminary study',v:'Annual CyberPsychology, CyberTherapy & Social Networking Conference',conf:true,tags:['ai']},
    {y:2023,a:'Triberti, S., Brizzi, G., De Santis, C., & Carruba, M. C.',t:'The brain at play: investigating motivational factors and perceived effects of high-level problem solving in video games',v:'Annual CyberPsychology, CyberTherapy & Social Networking Conference',conf:true,tags:['cyb']},
    {y:2023,a:'De Gaspari, S., Sajno, E., Di Lernia, D., Brizzi, G., Sansoni, M., & Riva, G.',t:'Detection of break in presence in full body illusion using machine learning',v:'Annual CyberPsychology, CyberTherapy & Social Networking Conference',conf:true,tags:['body','ai']},
    {y:2023,a:'Sansoni, M., Brizzi, G., Vila, A., Guillen Sanz, H., Strocchia, F., De Gaspari, S., Sajno, E., & Riva, G.',t:'Looking through your eyes: using immersive virtual reality to promote well-being among cancer survivors and their partners',v:'Annual CyberPsychology, CyberTherapy & Social Networking Conference',conf:true,tags:['cyb']},
    {y:2023,a:'Brizzi, G., Sansoni, M., Di Lernia, D., Frisone, F., Tuena, C., & Riva, G.',t:'The multisensory mind: a systematic review of multisensory integration processing in anorexia and bulimia nervosa',v:'Journal of Eating Disorders, 11(1), 1–31',doi:'10.1186/s40337-023-00930-9',tags:['ed','body']},
    {y:2023,a:'Brizzi, G., Sansoni, M., & Riva, G.',t:'The BODY-FRIEND project: using new technology to learn about how people with anorexia feel about their bodies',v:'Cyberpsychology, Behavior, and Social Networking',doi:'10.1089/cyber.2023.29267.ceu',tags:['ed','body']},
    {y:2022,a:'Parisi, A., Bellinzona, F., Di Lernia, D., Repetto, C., De Gaspari, S., Brizzi, G., Riva, G., & Tuena, C.',t:'Efficacy of multisensory technology in post-stroke cognitive rehabilitation: a systematic review',v:'Journal of Clinical Medicine, 11(21), 6324',doi:'10.3390/jcm11216324',tags:['rehab']},
    {y:2022,a:'Tuena, C., Serino, S., Maestri, S., Pedroli, E., Stramba-Badiale, C., Brizzi, G., Goulene, K., Cipresso, P., Stramba-Badiale, M., & Riva, G.',t:'Usability of an embodied CAVE system for spatial navigation rehabilitation in mild cognitive impairment',v:'IEEE MetroXRAINE 2022',doi:'10.1109/metroxraine54828.2022.9967623',conf:true,tags:['rehab','body']}
  ]
};
