// EDIT THIS FILE to update the programme. The website builds the schedule from it.
// Source: "AEGIS 2026 Public Schedule" (official, latest).
//
// Each day has "items". An item is either:
//   { kind: "row", time, title, desc?, type?: "break" }                      -> a simple timed row
//   { kind: "session", label, time, title, focus?, chair?, rows: [ ... ] }   -> a session block
// Session rows: { time, slot, speaker?, affil?, talkTitle?, type?: "break" | "panel" }

window.MEETING = {
  subtitle: "Integrative Approaches in One Health, AMR and Wellness using Omics",
  venue: "Workshop1, CSIR-Institute of Genomics and Integrative Biology (IGIB), New Delhi"
};

window.OVERVIEW = [
  { n: 1, theme: "One Health and AMR: Tracking Resistance across Hosts, Microbiomes and Environments",
    speakers: "U. R. Dahle, M. Al-Haroni, B. Taneja", chair: "Dr. Sharmila Mande, Prof. Fernanda Cristina Petersen" },
  { n: 2, theme: "Microbial Communities in Action: Signalling, Biofilms and the Emergence of Resistance",
    speakers: "S. Mande, F. C. Petersen, A. Dhariwal", chair: "Prof. Ulf Reidar Dahle, Dr. Sherry Bhalla" },
  { n: 3, theme: "Decoding Data in AMR: AI, Bioinformatics and Computational Genomics",
    speakers: "J. Narayan, K. Choudhary", chair: "Prof. Belinda Nicolau, Dr. Bhupesh Taneja" },
  { n: 4, theme: "Omics for Wellness: Host–Pathogen Interplay and Pathogen-Driven Disease",
    speakers: "R. Pandey, B. Nicolau", chair: "Prof. Cínthia Tabchoury, Prof. Antonio Pedro Ricomini Filho" }
];

window.SCHEDULE = [
  {
    day: "Day 1", date: "Tue, 24 Nov 2026", title: "Scientific Sessions",
    subtitle: "All faculty talks: 20 min + 5 min (Q&A) · All student talks: 7 min + 3 min (Q&A)",
    items: [
      {
        kind: "session", label: "Opening Session", time: "9:30 – 9:55 AM", title: "Opening Session",
        rows: [
          { time: "9:30 – 9:40", slot: "Welcome remarks", speaker: "Director, CSIR-IGIB" },
          { time: "9:40 – 9:50", slot: "Opening address", speaker: "Prof. Sharmila Mande" },
          { time: "9:50 – 9:55", slot: "Introduction to the programme", speaker: "Dr. Rajesh Pandey" }
        ]
      },
      {
        kind: "session", label: "Session 1", time: "9:55 – 11:30 AM",
        title: "One Health and AMR: Tracking Resistance across Hosts, Microbiomes and Environments",
        focus: "How resistance emerges, evolves and moves between human, animal and environmental reservoirs, studied through comparative genomics, evolutionary biology, surveillance and resistome analysis.",
        chair: "Dr. Sharmila Mande and Prof. Fernanda Cristina Petersen (University of Oslo, Norway)",
        rows: [
          { time: "9:55 – 10:20", slot: "Faculty Talk 1", speaker: "Prof. Ulf Reidar Dahle", affil: "Norwegian Institute of Public Health, Norway",
            talkTitle: "From Policy to Bench: Bridging Global AMR Frameworks with Clinical Reality and Microbiome Research" },
          { time: "10:20 – 10:45", slot: "Faculty Talk 2", speaker: "Prof. Mohammed Al-Haroni", affil: "University of Oslo, Norway",
            talkTitle: "Title to be confirmed" },
          { time: "10:45 – 11:10", slot: "Faculty Talk 3", speaker: "Dr. Bhupesh Taneja", affil: "CSIR-IGIB, New Delhi" },
          { time: "11:10 – 11:20", slot: "Student Talk 1", speaker: "Narun Gambhir", affil: "BT Lab, CSIR-IGIB" },
          { time: "11:20 – 11:30", slot: "Student Talk 2", speaker: "Anwesha De", affil: "JN Lab, CSIR-IGIB" },
          { time: "11:30 – 12:00", slot: "TEA BREAK & GROUP PHOTO", type: "break" }
        ]
      },
      {
        kind: "session", label: "Session 2", time: "12:00 – 1:25 PM",
        title: "Microbial Communities in Action: Signalling, Biofilms and the Emergence of Resistance",
        focus: "How bacteria and fungi communicate, exchange genes and build biofilms, and how these community behaviours drive tolerance, persistence and resistance.",
        chair: "Prof. Ulf Reidar Dahle (Norwegian Institute of Public Health, Norway) and Dr. Sherry Bhalla (CSIR-IGIB)",
        rows: [
          { time: "12:00 – 12:25", slot: "Faculty Talk 4", speaker: "Prof. Sharmila Mande", affil: "Ayush Distinguished Scientist Chair, Ministry of Ayush",
            talkTitle: "Nasopharyngeal and Gut microbiome in neonates" },
          { time: "12:25 – 12:50", slot: "Faculty Talk 5", speaker: "Prof. Fernanda Cristina Petersen", affil: "University of Oslo, Norway",
            talkTitle: "Beyond the gut: Insights from the nasopharyngeal microbiome" },
          { time: "12:50 – 1:15", slot: "Faculty Talk 6", speaker: "Dr. Achal Dhariwal", affil: "University of Oslo, Norway",
            talkTitle: "An Integrated Characterization of the Nasopharyngeal Resistome in Indian Preterm Infants: A Preliminary Comparison with Norway" },
          { time: "1:15 – 1:25", slot: "Student Talk 3", speaker: "Saraswati Awasthi", affil: "RS Lab, CSIR-IGIB" },
          { time: "1:25 – 2:20", slot: "LUNCH", type: "break" }
        ]
      },
      {
        kind: "session", label: "Session 3", time: "2:20 – 3:50 PM",
        title: "Decoding Data in AMR: AI, Bioinformatics and Computational Genomics",
        focus: "Turning sequence and structural data into biological insight: AI and machine-learning models to predict resistance, comparative and evolutionary genomics, genome informatics and the molecular architecture of resistance.",
        chair: "Prof. Belinda Nicolau (McGill University, Canada) and Dr. Bhupesh Taneja (CSIR-IGIB)",
        rows: [
          { time: "2:20 – 2:45", slot: "Faculty Talk 7", speaker: "Dr. Jitendra Narayan", affil: "CSIR-IGIB, New Delhi" },
          { time: "2:45 – 3:10", slot: "Faculty Talk 8", speaker: "Dr. Kumardeep Choudhary", affil: "CSIR-IGIB, New Delhi" },
          { time: "3:10 – 3:20", slot: "Student Talk 4", speaker: "Mukul Verma", affil: "JN Lab, CSIR-IGIB" },
          { time: "3:20 – 3:30", slot: "Student Talk 5", speaker: "Dhrumil Kumar Sisodiya", affil: "BT Lab, CSIR-IGIB" },
          { time: "3:30 – 3:40", slot: "Student Talk 6", speaker: "Sneha Thomas", affil: "Ajay Pratap Lab, CSIR-IGIB" },
          { time: "3:40 – 3:50", slot: "Student Talk 7", speaker: "Vishal Bharti", affil: "DC Lab, CSIR-IGIB" },
          { time: "3:50 – 4:20", slot: "TEA BREAK", type: "break" }
        ]
      },
      {
        kind: "session", label: "Session 4", time: "4:20 – 5:40 PM",
        title: "Omics for Wellness: Host–Pathogen Interplay and Pathogen-Driven Disease",
        focus: "Integrating host and microbial genomics and transcriptomics to understand infection outcomes, pathogen-driven disease across the life course, and approaches beyond conventional antibiotics.",
        chair: "Prof. Cínthia Pereira Machado Tabchoury and Prof. Antonio Pedro Ricomini Filho (University of Campinas, Brazil)",
        rows: [
          { time: "4:20 – 4:45", slot: "Faculty Talk 9", speaker: "Dr. Rajesh Pandey", affil: "CSIR-IGIB, New Delhi" },
          { time: "4:45 – 5:20", slot: "Faculty Talk 10", speaker: "Prof. Belinda Nicolau & Harsimran Singh Kapoor (PhD Trainee, McGill University)", affil: "McGill University, Canada",
            talkTitle: "Reading Between the Clocks: Intra-individual Variability in Epigenetic Age Estimates" },
          { time: "5:20 – 5:30", slot: "Student Talk 8", speaker: "Dr. Rudra Kumar Pandey", affil: "RP Lab, CSIR-IGIB" },
          { time: "5:30 – 5:40", slot: "Student Talk 9", speaker: "Jyoti Soni", affil: "RP Lab, CSIR-IGIB" },
          { time: "5:40 PM", slot: "CONCLUSION OF DAY 1", type: "break" }
        ]
      }
    ]
  },
  {
    day: "Day 2", date: "Wed, 25 Nov 2026", title: "Brainstorming and Networking",
    subtitle: "Theme: Building an Integrative Omics Framework for One Health, AMR and Wellness",
    items: [
      { kind: "row", time: "9:30 – 9:55", title: "Talk: Beyond Killing Bacteria: Targeting Biofilm Architecture for Disease Control",
        desc: "Prof. Antonio Pedro Ricomini Filho · Piracicaba Dental School, University of Campinas, Brazil" },
      { kind: "row", time: "9:55 – 10:20", title: "Talk: From Empiricism to Precision: Transforming Neonatal Sepsis Management through Evidence, Innovation and Antimicrobial Stewardship",
        desc: "Dr. Sushma Nangia · Department of Neonatology, Lady Hardinge Medical College, New Delhi" },
      { kind: "row", time: "10:20 – 10:50", title: "★ Fireside Chat: Science Without Borders: Exchange, Collaboration and the Road Ahead",
        desc: "Pernille on university collaboration and science exchange programmes, with Prof. Ulf Reidar Dahle, Prof. Fernanda Cristina Petersen, Dr. Sushma Nangia and Prof. Sharmila Mande reflecting on the key takeaways of the meeting. Moderator: Dr. Rajesh Pandey" },
      { kind: "row", time: "10:50 – 11:00", title: "★ Closing remarks and vote of thanks" },
      { kind: "row", time: "11:00 – 11:15", title: "Tea break", type: "break" },
      { kind: "row", time: "11:15 – 12:00", title: "Breakout Session 1", desc: "Internal Faculty Exchange · One Health and microbial communities: reservoirs, transmission and persistence (Sessions 1 & 2)" },
      { kind: "row", time: "12:00 – 12:45", title: "Breakout Session 2", desc: "Internal Faculty Exchange · AI, decoding AMR data and host omics: shared pipelines, prediction models, datasets and integration (Sessions 3 & 4)" },
      { kind: "row", time: "12:45 – 1:15", title: "Joint discussion", desc: "Internal Faculty Exchange · Shared datasets, complementary expertise and possible joint projects / student exchanges" },
      { kind: "row", time: "1:15 – 1:30", title: "Summary of action points", desc: "Internal Faculty Exchange" },
      { kind: "row", time: "1:30 – 2:30", title: "Lunch", type: "break" },
      { kind: "row", time: "2:30 onwards", title: "Delhi tour and informal networking", desc: "Internal Faculty Exchange" }
    ]
  },
  {
    day: "Day 3", date: "Thu, 26 Nov 2026", title: "Closing Session and Future Plans",
    items: [
      { kind: "row", time: "9:30 – 10:15", title: "Summary of Days 1 and 2 by the session chairs", desc: "Internal Faculty Exchange" },
      { kind: "row", time: "10:15 – 11:00", title: "Future plans", desc: "Internal Faculty Exchange · Collaborative research, training and follow-up activities" },
      { kind: "row", time: "11:00 – 11:15", title: "Tea break", type: "break" },
      { kind: "row", time: "11:15 – 11:45", title: "★ Closing remarks and vote of thanks", desc: "Internal Faculty Exchange" }
    ]
  }
];
