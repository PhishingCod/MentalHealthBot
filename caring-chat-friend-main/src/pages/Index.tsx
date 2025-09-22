import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Shield, MessageCircle, Phone } from 'lucide-react';
import MindfulBot from '@/components/MindfulBot';
import heroImage from '@/assets/hero-calm.jpg';

const Index = () => {
  const [showChat, setShowChat] = React.useState(false);

  if (showChat) {
    return (
      <div className="min-h-screen bg-gradient-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-calm rounded-full flex items-center justify-center shadow-gentle">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">MindfulBot</h1>
                <p className="text-sm text-muted-foreground">Your compassionate AI companion</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowChat(false)}
              className="border-primary/20 hover:bg-primary/5"
            >
              Back to Home
            </Button>
          </div>
          <MindfulBot />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-calm rounded-full flex items-center justify-center shadow-glow animate-gentle-bounce">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-calm bg-clip-text text-transparent">
                MindfulBot
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Your compassionate AI companion for mental health support. I'm here to listen without judgment 
              and offer gentle guidance in a safe space.
            </p>
            
            <Button 
              onClick={() => setShowChat(true)}
              size="lg"
              className="bg-gradient-calm hover:shadow-glow transition-all duration-300 text-lg px-8 py-3"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Conversation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              A Safe Space for Your Thoughts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              MindfulBot provides compassionate support through empathetic listening, 
              gentle guidance, and resources for your mental wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-gentle hover:shadow-warm transition-all duration-300 border-primary/10">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-healing rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl">Compassionate Listening</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Share your thoughts and feelings in a judgment-free environment. 
                  I'm here to listen with empathy and understanding.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-gentle hover:shadow-warm transition-all duration-300 border-primary/10">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Safe & Private</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Your conversations are private and secure. This is your safe space 
                  to express yourself without fear of judgment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-gentle hover:shadow-warm transition-all duration-300 border-primary/10">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-calm rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Gentle Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Receive supportive suggestions like breathing exercises, journaling prompts, 
                  and gentle reminders for self-care.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Crisis Resources Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-destructive" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Immediate Help?
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              If you're experiencing a mental health crisis, please reach out to professional help immediately. 
              MindfulBot is a supportive companion, but not a replacement for professional care.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-destructive mb-2">Crisis Hotline</h3>
                  <p className="text-2xl font-bold text-destructive mb-1">988</p>
                  <p className="text-sm text-muted-foreground">Suicide & Crisis Lifeline</p>
                </CardContent>
              </Card>
              
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-destructive mb-2">Crisis Text Line</h3>
                  <p className="text-xl font-bold text-destructive mb-1">Text "HELLO"</p>
                  <p className="text-xl font-bold text-destructive mb-1">to 741741</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground">
            Made with <Heart className="w-4 h-4 inline text-primary" /> for mental health awareness
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;