import { Lora} from 'next/font/google'



export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify weights you need
  variable: '--font-caveat', // Optional: use a CSS variable for easier reference
  display: 'swap', // Fallback option for better performance
});