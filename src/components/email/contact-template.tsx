import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface Props {
  name: string;
  message: string;
  email: string;
}

export const ContactTemplate = ({ name, message, email }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>New contact message from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <div style={logoContainer}>
              <Text style={logoText}>
                <span style={bracket}>&lt;</span>
                Portfolio
                <span style={bracket}>/&gt;</span>
              </Text>
            </div>
          </Section>

          <Section style={content}>
            <Heading style={h1}>New Contact Message</Heading>

            <Text style={text}>
              You have received a new message from your portfolio contact form!
            </Text>

            <Section style={messageCard}>
              <div style={messageHeader}>
                <Text style={senderName}>{name}</Text>
                <Text style={senderEmail}>{email}</Text>
              </div>

              <Hr style={divider} />

              <div style={messageContent}>
                <Text style={messageText}>{message}</Text>
              </div>
            </Section>

            <Section style={buttonContainer}>
              <Button
                style={button}
                href={`mailto:${email}`}
              >
                Reply to {name}
              </Button>
            </Section>
          </Section>

          <Section style={footer}>
            <Hr style={footerDivider} />
            <Text style={footerText}>This message was sent from your portfolio contact form.</Text>
            <Text style={footerText}>© 2025 Your Portfolio. All rights reserved.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#0a0a0a',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
  color: '#ffffff',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const header = {
  padding: '32px 0',
  textAlign: 'center' as const,
};

const logoContainer = {
  margin: '0 auto',
};

const logoText = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#ffffff',
  margin: '0',
};

const bracket = {
  color: '#8b5cf6',
  fontSize: '32px',
};

const content = {
  padding: '0 24px',
};

const h1 = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '40px 0 32px',
  lineHeight: '1.2',
};

const text = {
  color: '#a1a1aa',
  fontSize: '16px',
  lineHeight: '1.6',
  textAlign: 'center' as const,
  margin: '0 0 32px',
};

const messageCard = {
  backgroundColor: '#18181b',
  border: '1px solid #27272a',
  borderRadius: '12px',
  padding: '24px',
  margin: '32px 0',
};

const messageHeader = {
  marginBottom: '16px',
};

const senderName = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 8px 0',
};

const senderEmail = {
  color: '#8b5cf6',
  fontSize: '14px',
  margin: '0',
  fontWeight: '500',
};

const divider = {
  border: 'none',
  borderTop: '1px solid #27272a',
  margin: '16px 0',
};

const messageContent = {
  marginTop: '16px',
};

const messageText = {
  color: '#d4d4d8',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
  padding: '16px',
  backgroundColor: '#09090b',
  borderRadius: '8px',
  border: '1px solid #1f1f23',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '20px 0',
};

const button = {
  backgroundColor: '#8b5cf6',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

const footer = {
  marginTop: '48px',
};

const footerDivider = {
  border: 'none',
  borderTop: '1px solid #27272a',
  margin: '32px 0',
};

const footerText = {
  color: '#71717a',
  fontSize: '12px',
  textAlign: 'center' as const,
  margin: '8px 0',
  lineHeight: '1.4',
};

export default ContactTemplate;
