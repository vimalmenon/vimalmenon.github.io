import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';

export const metadata: Metadata = {
  title: 'About | Vimal Menon',
  description: "This is Vimal Menon's personal website",
};

const Page: React.FC = () => {
  return (
    <Box component="main">
      <Breadcrumbs navigation={Navigation.About} />
      <div>This is About page</div>
      <div>
        # About Me Hello and welcome! My name is **Vimal Menon**, and I’m thrilled to have you here.
        I’m currently based in the vibrant city of **Hong Kong**, where I spend my time exploring
        the fascinating world of technology and sharing my knowledge with others. ## My Interests
        and Expertise I have a deep passion for **Software Engineering** and **Artificial
        Intelligence (AI)**, two fields that are shaping the future of technology. My expertise lies
        in **AI**, **Python**, and **JavaScript**, and I love using these tools to solve complex
        problems and create innovative solutions. Whether it’s building intelligent systems,
        developing web applications, or diving into the latest advancements in AI, I’m always eager
        to learn and grow. ## What I Do I’m a content creator who loves sharing my knowledge and
        experiences with the world. Through my **blogs** and **YouTube videos**, I aim to make
        complex topics in software engineering and AI more accessible and engaging. My goal is to
        inspire others to explore these fields and discover the endless possibilities they offer. -
        **YouTube Channel**: [real_vimal_menon](https://www.youtube.com/real_vimal_menon) Here, I
        share tutorials, insights, and discussions on topics related to AI, Python, JavaScript, and
        more. Whether you’re a beginner or an experienced developer, there’s something for everyone!
        - **Email**: [realvimalmenon@proton.me](mailto:realvimalmenon@proton.me) Feel free to reach
        out if you have any questions, collaboration ideas, or just want to connect. I’d love to
        hear from you! ## Why I Do It Technology has the power to transform lives, and I believe
        that sharing knowledge is one of the best ways to contribute to this transformation. By
        creating content, I hope to empower others to learn, innovate, and make a positive impact in
        the world of tech. ## Let’s Connect! If you’re as passionate about software engineering, AI,
        or technology in general as I am, I’d love to connect with you. Subscribe to my YouTube
        channel, drop me an email, or follow my journey as I continue to explore and share the
        exciting world of technology. Thank you for stopping by, and I look forward to connecting
        with you! Warm regards, **Vimal Menon**
      </div>
    </Box>
  );
};

export default Page;
