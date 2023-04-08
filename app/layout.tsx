// Configuration
import appConfig from '../config/app';
// Styles
import './styles/globals.css';

export const metadata = {
  title: appConfig.name,
  description: appConfig.description,
  viewport: 'width=device-width, initial-scale=1'
};


export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
    children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>{ children }</body>
    </html>
  );
}