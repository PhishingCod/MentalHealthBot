import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Heart, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const MindfulBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm MindfulBot, your compassionate AI companion. I'm here to listen without judgment and offer gentle support. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Crisis detection
    if (lowerMessage.includes('suicide') || lowerMessage.includes('kill myself') || 
        lowerMessage.includes('end it all') || lowerMessage.includes('not worth living')) {
      return "I'm hearing some serious distress. Please know there's help available right now. You can call or text the National Suicide Prevention Lifeline at 988. This bot is not a substitute for professional help.";
    }

    // Emotional responses
    if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety')) {
      return "I hear that you're feeling anxious. That's a really valid feeling. Would it help to try a simple breathing exercise? Breathe in for 4 counts, hold for 4, then breathe out for 6. Sometimes when our minds are racing, grounding ourselves in our breath can provide a moment of calm.";
    }

    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('down')) {
      return "I'm sorry you're feeling this way. Sadness can feel so heavy sometimes. It's okay to sit with these feelings - they're part of being human. Have you been able to talk to anyone else about how you're feeling? Sometimes just sharing can lighten the load a little.";
    }

    if (lowerMessage.includes('stressed') || lowerMessage.includes('overwhelmed')) {
      return "Feeling overwhelmed can be really tough. When everything feels like too much, sometimes it helps to break things down into smaller, manageable pieces. What's one small thing you could focus on right now? Remember, you don't have to carry everything at once.";
    }

    if (lowerMessage.includes('lonely') || lowerMessage.includes('alone')) {
      return "Loneliness can feel so isolating. Thank you for sharing that with me - it takes courage to express those feelings. You're not alone in feeling this way. Is there someone in your life you might feel comfortable reaching out to, even just to say hello?";
    }

    // Positive responses
    if (lowerMessage.includes('better') || lowerMessage.includes('good') || lowerMessage.includes('great')) {
      return "I'm so glad to hear you're feeling better! That's wonderful. What do you think has been helping you feel this way? Sometimes it's good to notice and acknowledge the positive shifts, even the small ones.";
    }

    // Default empathetic responses
    const defaultResponses = [
      "Thank you for sharing that with me. I'm here to listen. Would you like to tell me more about what's on your mind?",
      "I hear you. It sounds like you're going through something difficult. Remember, it's okay to feel whatever you're feeling right now.",
      "That sounds really challenging. You're being so brave by talking about it. What would feel most helpful for you right now?",
      "I appreciate you trusting me with your feelings. Sometimes just expressing what we're going through can be a first step. How are you taking care of yourself today?",
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Crisis Resources Alert */}
      <Alert className="mb-4 border-destructive/20 bg-destructive/5">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <AlertTitle className="text-destructive">Crisis Resources</AlertTitle>
        <AlertDescription>
          If you're in crisis, please call 988 (Suicide & Crisis Lifeline) or text "HELLO" to 741741 (Crisis Text Line).
        </AlertDescription>
      </Alert>

      {/* Chat Area */}
      <Card className="flex-1 shadow-warm">
        <CardContent className="p-0 h-full">
          <ScrollArea className="h-[600px] p-6" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-calm text-primary-foreground shadow-gentle'
                        : 'bg-secondary/50 text-secondary-foreground'
                    }`}
                  >
                    {message.sender === 'bot' && (
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">MindfulBot</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-60 mt-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-secondary/50 rounded-2xl px-4 py-3 max-w-[80%]">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">MindfulBot</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Input Area */}
      <div className="mt-4 flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Share what's on your mind..."
          className="flex-1 border-primary/20 focus:border-primary focus:ring-primary/20"
        />
        <Button 
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isTyping}
          className="bg-gradient-calm hover:shadow-glow transition-all duration-300"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default MindfulBot;