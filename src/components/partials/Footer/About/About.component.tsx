import * as motion from 'motion/react-client';

import { Card, CardContent } from '@components';

export const About: React.FC = () => (
  <div className="lg:col-span-1 space-y-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl font-bold whitespace-nowrap">Vimal Menon</span>
      </div>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Full-stack developer passionate about creating beautiful, functional digital experiences.
        Specializing in modern web technologies and cloud architecture.
      </p>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-primary/5 border-primary/10">
          <CardContent className="p-3 text-center">
            <div className="text-lg font-bold text-primary">8+</div>
            <div className="text-xs text-muted-foreground">Years Experience</div>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 border-border/50">
          <CardContent className="p-3 text-center">
            <div className="text-lg font-bold">50+</div>
            <div className="text-xs text-muted-foreground">Projects Built</div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  </div>
);
