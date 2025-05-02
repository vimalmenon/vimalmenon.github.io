import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { CopyToClipboard } from '@component';
import { Navigation } from '@data';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'About | Vimal Menon',
};

const Page: React.FC = () => (
  <StyledPage>
    <Breadcrumbs navigation={Navigation.About} />
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ color: 'primary.main', textDecoration: 'underline' }}>
          <h2>About Me</h2>
        </Box>

        <Box sx={{ alignItems: 'center', display: 'flex' }}>
          <b>Updated Date</b> : 25 February 2025
        </Box>
      </Box>
      <Box sx={{ textIndent: '20px' }}>
        Hello and welcome! My name is <b>Vimal Menon</b>, and I&apos;m thrilled to have you here.
        I&apos;m currently based in the vibrant city of <b>Hong Kong</b>, where I spend my time
        exploring the fascinating world of technology and sharing my knowledge with others.
      </Box>
      <Box component="h3" sx={{ color: 'primary.main' }}>
        My Interests and Expertise
      </Box>
      <Box sx={{ textIndent: '20px' }}>
        I have a deep passion for <b>Software Engineering</b> and{' '}
        <b>Artificial Intelligence (AI)</b>, two fields that are shaping the future of technology.
        My expertise lies in <b>AI</b>, <b>Python</b>, and <b>JavaScript</b>, and I love using these
        tools to solve complex problems and create innovative solutions. Whether it&apos;s building
        intelligent systems, developing web applications, or diving into the latest advancements in
        AI, I’m always eager to learn and grow.{' '}
      </Box>
      <Box component="h3" sx={{ color: 'primary.main' }}>
        What I Do
      </Box>
      <Box sx={{ textIndent: '20px' }}>
        I&apos;m a content creator who loves sharing my knowledge and experiences with the world.
        Through my <b>blogs</b> and <b>YouTube videos</b>, I aim to make complex topics in software
        engineering and AI more accessible and engaging. My goal is to inspire others to explore
        these fields and discover the endless possibilities they offer. -<b>YouTube Channel</b> :{' '}
        <MuiLink href="https://www.youtube.com/@real_vimal_menon" target="_blank" rel="noreferrer">
          real_vimal_menon
        </MuiLink>{' '}
        Here, I share tutorials, insights, and discussions on topics related to AI, Python,
        JavaScript, and more. Whether you’re a beginner or an experienced developer, there’s
        something for everyone! - <b>Email</b> : <CopyToClipboard text="realvimalmenon@proton.me" />{' '}
        Feel free to reach out if you have any questions, collaboration ideas, or just want to
        connect. I’d love to hear from you!
      </Box>
      <Box component="h3" sx={{ color: 'primary.main' }}>
        Why I Do It
      </Box>
      <Box sx={{ textIndent: '20px' }}>
        Technology has the power to transform lives, and I believe that sharing knowledge is one of
        the best ways to contribute to this transformation. By creating content, I hope to empower
        others to learn, innovate, and make a positive impact in the world of tech.
      </Box>
      <Box component="h3" sx={{ color: 'primary.main' }}>
        Let’s Connect!
      </Box>
      <Box sx={{ textIndent: '20px' }}>
        If you’re as passionate about software engineering, AI, or technology in general as I am,
        I’d love to connect with you. Subscribe to my YouTube channel, drop me an email, or follow
        my journey as I continue to explore and share the exciting world of technology.
      </Box>
      <div>Thank you for stopping by, and I look forward to connecting with you! </div>
      <br />
      <div>Warm regards,</div>
      <div>
        <b> Vimal Menon</b>
      </div>
      <br />
    </div>
  </StyledPage>
);

export default Page;
