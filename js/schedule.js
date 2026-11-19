// EDIT THIS FILE to update the programme. The website builds the schedule from it.
// Source: "Resisforce Satellite Meeting Programme" (official, updated).
//
// Each day has "items". An item is either:
//   { kind: "row", time, title, desc?, type?: "break" }                      -> a simple timed row
//   { kind: "session", label, time, title, focus?, chair?, rows: [ ... ] }   -> a session block
// Session rows: { time, slot, speaker?, affil?, talkTitle?, type?: "break" | "panel" }

window.MEETING = {
  subtitle: "Integrative Approaches in One Health, AMR and Wellness using Omics",
  venue: "CSIR-Institute of Genomics and Integrative Biology (IGIB), New Delhi"
};

window.OVERVIEW = [
  { n: 1, theme: "One Health and AMR: Tracking Resistance across Hosts, Microbiomes and Environments",
    speakers: "U. R. Dahle, M. Al-Haroni, B. Taneja", chair: "Dr. Sharmila Mande, Dr. Achal Dhariwal" },
  { n: 2, theme: "Microbial Communities in Action: Signalling, Biofilms and the Emergence of Resistance",
    speakers: "S. Mande, F. C. Petersen, A. P. Ricomini Filho", chair: "Prof. Ulf Reidar Dahle, Prof. Belinda Nicolau" },
  { n: 3, theme: "Decoding Data in AMR: AI, Bioinformatics and Computational Genomics",
    speakers: "J. Narayan, K. Choudhary", chair: "Dr. Bhupesh Taneja, Dr. Sherry Bhalla" },
  { n: 4, theme: "Omics for Wellness: Host–Pathogen Interplay and Pathogen-Driven Disease",
    speakers: "R. Pandey, B. Nicolau", chair: "Prof. Cínthia Tabchoury" }
];

window.SCHEDULE = [
  {
    day: "Day 1", date: "Tue, 24 Nov 2026", title: "Scientific Sessions",
    items: [
      {
        kind: "session", label: "Opening Session", time: "9:30 – 10:05 AM", title: "Opening Session",
        rows: [
          { time: "9:30 – 9:40", slot: "Welcome remarks", speaker: "Director, CSIR-IGIB" },
          { time: "9:40 – 9:50", slot: "Opening address", speaker: "Prof. Sharmila Mande" },
          { time: "9:50 – 9:55", slot: "Introduction to the programme", speaker: "Dr. Rajesh Pandey (Coordinator)" },
          { time: "9:55 – 10:05", slot: "Group photo session" }
        ]
      },
      {
        kind: "session", label: "Session 1", time: "10:05 – 11:45 AM",
        title: "One Health and AMR: Tracking Resistance across Hosts, Microbiomes and Environments",
        focus: "How resistance emerges, evolves and moves between human, animal and environmental reservoirs, studied through comparative genomics, evolutionary biology, surveillance and resistome analysis.",
        chair: "Dr. Sharmila Mande and Dr. Achal Dhariwal (University of Oslo)",
        rows: [
          { time: "10:05 – 10:30", slot: "Faculty Talk 1", speaker: "Prof. Ulf Reidar Dahle", affil: "Norwegian Institute of Public Health, Norway",
            talkTitle: "From Policy to Bench: Bridging Global AMR Frameworks with Clinical Reality and Microbiome Research" },
          { time: "10:30 – 10:55", slot: "Faculty Talk 2", speaker: "Prof. Mohammed Al-Haroni", affil: "University of Oslo, Norway",
            talkTitle: "Title to be confirmed" },
          { time: "10:55 – 11:20", slot: "Faculty Talk 3", speaker: "Dr. Bhupesh Taneja", affil: "CSIR-IGIB, New Delhi" },
          { time: "11:20 – 11:30", slot: "Student Talk 1", speaker: "Student speaker (TBC)", affil: "JN Lab, CSIR-IGIB" },
          { time: "11:30 – 11:40", slot: "Student Talk 2", speaker: "Student speaker (TBC)", affil: "BT Lab, CSIR-IGIB" },
          { time: "11:40 – 11:45", slot: "Panel discussion", speaker: "Speakers of the session with the Chair", type: "panel" },
          { time: "11:45 – 12:00", slot: "TEA BREAK", type: "break" }
        ]
      },
      {
        kind: "session", label: "Session 2", time: "12:00 – 1:30 PM",
        title: "Microbial Communities in Action: Signalling, Biofilms and the Emergence of Resistance",
        focus: "How bacteria and fungi communicate, exchange genes and build biofilms, and how these community behaviours drive tolerance, persistence and resistance.",
        chair: "Prof. Ulf Reidar Dahle (Norwegian Institute of Public Health, Norway) and Prof. Belinda Nicolau (McGill University, Canada)",
        rows: [
          { time: "12:00 – 12:25", slot: "Faculty Talk 4", speaker: "Prof. Sharmila Mande", affil: "Ayush Distinguished Scientist Chair, Ministry of Ayush",
            talkTitle: "Nasopharyngeal and Gut microbiome in neonates" },
          { time: "12:25 – 12:50", slot: "Faculty Talk 5", speaker: "Prof. Fernanda Cristina Petersen", affil: "University of Oslo, Norway",
            talkTitle: "Beyond the gut: Insights from the nasopharyngeal microbiome" },
          { time: "12:50 – 1:15", slot: "Faculty Talk 6", speaker: "Prof. Antonio Pedro Ricomini Filho", affil: "University of Campinas, Brazil",
            talkTitle: "Beyond Killing Bacteria: Targeting Biofilm Architecture for Disease Control" },
          { time: "1:15 – 1:25", slot: "Student Talk 3", speaker: "Saraswati Awasthi", affil: "RS Lab, CSIR-IGIB" },
          { time: "1:25 – 1:30", slot: "Panel discussion", speaker: "Speakers of the session with the Chair", type: "panel" },
          { time: "1:30 – 2:30", slot: "LUNCH", type: "break" }
        ]
      },
      {
        kind: "session", label: "Session 3", time: "2:30 – 4:00 PM",
        title: "Decoding Data in AMR: AI, Bioinformatics and Computational Genomics",
        focus: "Turning sequence and structural data into biological insight: AI and machine-learning models to predict resistance, comparative and evolutionary genomics, genome informatics and the molecular architecture of resistance.",
        chair: "Dr. Bhupesh Taneja and Dr. Sherry Bhalla",
        rows: [
          { time: "2:30 – 2:55", slot: "Faculty Talk 7", speaker: "Dr. Jitendra Narayan", affil: "CSIR-IGIB, New Delhi" },
          { time: "2:55 – 3:20", slot: "Faculty Talk 8", speaker: "Dr. Kumardeep Choudhary", affil: "CSIR-IGIB, New Delhi" },
          { time: "3:20 – 3:30", slot: "Student Talk 4", speaker: "Student speaker (TBC)", affil: "JN Lab, CSIR-IGIB" },
          { time: "3:30 – 3:40", slot: "Student Talk 5", speaker: "Student speaker (TBC)", affil: "BT Lab, CSIR-IGIB" },
          { time: "3:40 – 3:50", slot: "Student Talk 6", speaker: "Sneha Thomas", affil: "Ajay Pratap Lab, CSIR-IGIB" },
          { time: "3:50 – 4:00", slot: "Panel discussion", speaker: "Speakers of the session with the Chair", type: "panel" },
          { time: "4:00 – 4:15", slot: "TEA BREAK", type: "break" }
        ]
      },
      {
        kind: "session", label: "Session 4", time: "4:15 – 5:45 PM",
        title: "Omics for Wellness: Host–Pathogen Interplay and Pathogen-Driven Disease",
        focus: "Integrating host and microbial genomics and transcriptomics to understand infection outcomes, pathogen-driven disease across the life course, and approaches beyond conventional antibiotics.",
        chair: "Prof. Cínthia Pereira Machado Tabchoury (University of Campinas, Brazil)",
        rows: [
          { time: "4:15 – 4:40", slot: "Faculty Talk 9", speaker: "Dr. Rajesh Pandey", affil: "CSIR-IGIB, New Delhi" },
          { time: "4:40 – 5:05", slot: "Faculty Talk 10", speaker: "Prof. Belinda Nicolau", affil: "McGill University, Canada",
            talkTitle: "Reading Between the Clocks: Intra-individual Variability in Epigenetic Age Estimates" },
          { time: "5:05 – 5:15", slot: "Student Talk 7", speaker: "Harsimran Singh Kapoor (PhD Trainee)", affil: "Faculty of Dental Medicine & Oral Health Sciences, McGill University, Canada" },
          { time: "5:15 – 5:25", slot: "Student Talk 8", speaker: "Student speaker (TBC)", affil: "RP Lab, CSIR-IGIB" },
          { time: "5:25 – 5:35", slot: "Student Talk 9", speaker: "Student speaker (TBC)", affil: "RP Lab / DC Lab, CSIR-IGIB" },
          { time: "5:35 – 5:45", slot: "Panel discussion", speaker: "Speakers of the session with the Chair", type: "panel" },
          { time: "5:45 PM", slot: "CONCLUSION OF DAY 1", type: "break" }
        ]
      }
    ]
  },
  {
    day: "Day 2", date: "Wed, 25 Nov 2026", title: "Brainstorming and Networking",
    subtitle: "Theme: Building an Integrative Omics Framework for One Health, AMR and Wellness",
    items: [
      { kind: "row", time: "9:30 – 9:45", title: "Recap of key questions emerging from Day 1" },
      { kind: "row", time: "9:45 – 10:30", title: "Breakout Session 1", desc: "One Health and microbial communities: reservoirs, transmission and persistence (Sessions 1 & 2)" },
      { kind: "row", time: "10:30 – 11:15", title: "Breakout Session 2", desc: "AI, decoding AMR data and host omics: shared pipelines, prediction models, datasets and integration (Sessions 3 & 4)" },
      { kind: "row", time: "11:15 – 11:30", title: "Tea break", type: "break" },
      { kind: "row", time: "11:30 – 12:30", title: "Joint discussion", desc: "Shared datasets, complementary expertise and possible joint projects / student exchanges" },
      { kind: "row", time: "12:30 – 1:00", title: "Summary of action points" },
      { kind: "row", time: "1:00 – 2:00", title: "Lunch", type: "break" },
      { kind: "row", time: "2:00 onwards", title: "Delhi tour and informal networking" }
    ]
  },
  {
    day: "Day 3", date: "Thu, 26 Nov 2026", title: "Closing Session and Future Plans",
    items: [
      { kind: "row", time: "9:30 – 10:15", title: "Summary of Days 1 and 2 by the session chairs" },
      { kind: "row", time: "10:15 – 11:00", title: "Future plans", desc: "Collaborative research, training and follow-up activities" },
      { kind: "row", time: "11:00 – 11:15", title: "Tea break", type: "break" },
      { kind: "row", time: "11:15 – 11:45", title: "Closing remarks and vote of thanks" },
      { kind: "row", time: "12:30", title: "Departure for the airport" }
    ]
  }
];
