export interface JobRole {
  id: string;
  title: string;
  category: string;
  status: 'open' | 'closed';
  type: string;
  compensation: string;
  iconName: string;
  image?: string;
  shortDescription: string;
  fullDescription: {
    overview: string;
    responsibilities: string[];
    requirements: string[];
    preferredSkills: string[];
  };
}

export const CAREER_ROLES: JobRole[] = [
  {
    id: 'script-writer',
    title: 'Script Writer',
    category: 'Creative & Narrative',
    status: 'closed',
    type: 'Project-Based / Contract',
    compensation: 'Competitive (Per Script / Episode)',
    iconName: 'PenTool',
    image: 'https://i.redd.it/xwldqp70byme1.jpeg',
    shortDescription: 'Write gripping storylines, engaging episode arcs, and comedic retention hooks for Minecraft survival and lore series.',
    fullDescription: {
      overview: 'We are seeking an imaginative and narrative-focused Script Writer to develop episodic storylines, character dialogue, challenge narratives, and high-retention video outlines for our Minecraft YouTube channel.',
      responsibilities: [
        'Write detailed episode outlines and beat sheets with strong 30-second retention hooks.',
        'Develop engaging character dialogue, SMP plotlines, and survival challenge pacing.',
        'Collaborate with Nikverse and editors to align narrative beats with editing cues and visual moments.',
        'Research trending concepts and Minecraft lore to keep content fresh and viral.'
      ],
      requirements: [
        'Proven track record writing for YouTube gaming channels or digital entertainment.',
        'Deep understanding of YouTube pacing, retention curve dynamics, and storytelling.',
        'Excellent English written communication and creative writing skills.',
        'Ability to meet consistent weekly deadlines and iterate on feedback quickly.'
      ],
      preferredSkills: [
        'In-depth knowledge of Minecraft mechanics, popular modpacks, and SMP culture.',
        'Experience with Notion / Google Docs script formatting standards.'
      ]
    }
  },
  {
    id: 'video-editor',
    title: 'Video Editor',
    category: 'Post-Production',
    status: 'closed',
    type: 'Full-Time / Contract',
    compensation: 'High Tier (Per Video + Performance Bonus)',
    iconName: 'Film',
    image: 'https://i.ytimg.com/vi/Jb9Ebe_rA8M/mqdefault.jpg',
    shortDescription: 'Edit high-retention, fast-paced Minecraft gameplay, cinematic sequences, dynamic soundscapes, and visual storytelling.',
    fullDescription: {
      overview: 'We are looking for a top-tier Video Editor to transform raw gameplay and cinematic footage into polished, binge-worthy YouTube masterclasses with rapid pacing and immersive sound design.',
      responsibilities: [
        'Cut and assemble multi-track audio and 60 FPS 1440p/4K gameplay footage into high-retention videos.',
        'Create snappy zoom cuts, custom motion graphics, meme timing, and seamless transition effects.',
        'Build layered soundscapes with custom Foley, SFX risers, ambient reverb, and impactful music selection.',
        'Deliver finalized cuts on tight schedules ready for YouTube upload.'
      ],
      requirements: [
        'Proficiency in Adobe Premiere Pro, DaVinci Resolve, or After Effects.',
        'Strong portfolio showcasing Minecraft or fast-paced YouTube gaming edits.',
        'Mastery of sound design, comedic timing, and visual tension building.',
        'High-speed internet connection for downloading and uploading large RAW footage assets.'
      ],
      preferredSkills: [
        'Experience using Boris FX, Sapphire plugins, or Blender camera imports.',
        'Understanding of retention analytics and CTR/AVD optimization techniques.'
      ]
    }
  },
  {
    id: 'thumbnail-designer',
    title: 'Thumbnail Designer',
    category: 'Art & Design',
    status: 'closed',
    type: 'Per-Thumbnail / Retainer',
    compensation: 'Premium Rate ($/Thumbnail)',
    iconName: 'Image',
    image: 'https://i0.wp.com/blog.artsper.com/wp-content/uploads/2022/06/44151m.jpg?resize=598%2C417&ssl=1',
    shortDescription: 'Create click-worthy, visually striking 3D rendered & illustrated thumbnails that maximize CTR and visual storytelling.',
    fullDescription: {
      overview: 'We need a creative 3D Thumbnail Designer capable of rendering expressive Minecraft character poses, dramatic cinematic lighting, and custom text design that stands out in the YouTube algorithm.',
      responsibilities: [
        'Pose, rig, and render Minecraft skins and environments in Blender, Cinema4D, or Mine-imator.',
        'Paint custom lighting, rim highlights, particle effects, and depth maps in Photoshop.',
        'Iterate on thumbnail concepts, color grading schemes, and A/B test variations.',
        'Deliver high-res 1920x1080 and 4K thumbnail master files with proper color management.'
      ],
      requirements: [
        'Mastery of Photoshop and 3D rendering suites (Blender / C4D / Mine-imator).',
        'Proven portfolio of high-performing YouTube gaming thumbnails.',
        'Strong understanding of color contrast, focal points, and facial expression readability at small mobile scales.',
        'Rapid turnaround time within 12 to 24 hours of concept approval.'
      ],
      preferredSkills: [
        'Custom digital illustration and matte painting skills.',
        'Experience creating custom Minecraft rig expressions and stylized 3D props.'
      ]
    }
  },
  {
    id: 'animation-artist',
    title: 'Animation Artist',
    category: '3D & Motion',
    status: 'closed',
    type: 'Project-Based',
    compensation: 'Per Project / Commission',
    iconName: 'Sparkles',
    image: 'https://i.imgur.com/li0MmRU.jpg',
    shortDescription: 'Animate dynamic Minecraft character fight scenes, custom intros, expressive facial rigs, and cinematic sequences.',
    fullDescription: {
      overview: 'We are seeking a talented 3D Character Animator to produce short cinematic fight sequences, expressive character interactions, and dynamic motion teasers for special video milestones and episode climaxes.',
      responsibilities: [
        'Animate stylized Minecraft character models with fluid body mechanics, weight, and sword fight choreography.',
        'Create expressive lip-syncing and facial rig animations matching voiceover tracks.',
        'Simulate cloth physics, particle effects, magical lighting, and environmental destruction.',
        'Collaborate closely with the director and lead video editor.'
      ],
      requirements: [
        'Proficiency in Blender, Maya, or Mine-imator 3D character animation.',
        'Solid foundation in the 12 Principles of Animation (timing, anticipation, squash & stretch).',
        'Demonstrated portfolio or showreel of Minecraft or 3D stylized character animation.',
        'Ability to work with rig presets and texture assets.'
      ],
      preferredSkills: [
        'Experience with procedural shader animations and camera shake curves.',
        'Knowledge of Blender Geometry Nodes and particle simulations.'
      ]
    }
  },
  {
    id: 'cinematic-artist',
    title: 'Cinematic Artist',
    category: 'In-Game Capture',
    status: 'closed',
    type: 'Seasonal / Project-Based',
    compensation: 'Hourly / Per Project',
    iconName: 'Camera',
    image: 'https://media.tenor.com/aaur4xIJftUAAAAM/hacker-pc.gif',
    shortDescription: 'Capture breathtaking in-game cinematics, sweeping landscape drone shots, and dramatic camera paths with ReplayMod.',
    fullDescription: {
      overview: 'Our cinematic team handles in-game world captures, sweeping camera flybys, timelapse recordings, and dramatic lighting showcases for major build reveals and world tours.',
      responsibilities: [
        'Capture smooth keyframe camera paths in Minecraft using ReplayMod.',
        'Configure optimal shaderpacks (BSL, Complementary, Kappa) and Iris settings for realistic atmospheric lighting.',
        'Coordinate live scene setups with actors/builders for background ambiance.',
        'Export uncompressed high-framerate clips (60-120fps) for editor integration.'
      ],
      requirements: [
        'Expertise with Minecraft ReplayMod and camera smoothing curve manipulation.',
        'High-end PC rig capable of recording 1440p/4K footage with shaders at high FPS.',
        'Great eye for photography, rule of thirds, architectural composition, and cinematic lighting.',
        'Punctual and reliable file delivery.'
      ],
      preferredSkills: [
        'Experience with WorldEdit, Axiom, and custom resource pack creation.'
      ]
    }
  }
];
