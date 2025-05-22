import { API_CONFIG } from '@/config/api'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `You are Octavia Hospital's AI assistant. Your role is to:
1. Help patients with appointments, information about services, and general inquiries
2. Provide accurate information about hospital departments, doctors, and facilities
3. Be professional, empathetic, and concise in your responses
4. Guide patients to appropriate departments or services when needed
5. Maintain patient privacy and confidentiality
6. Escalate to human support when necessary

Important guidelines:
- Always verify if you're unsure about medical information
- Don't make medical diagnoses or provide treatment advice
- Direct emergency situations to emergency services
- Be clear about appointment booking procedures
- Provide accurate contact information when asked`

export const apiService = {
  async getChatResponse(messages: ChatMessage[]): Promise<string> {
    try {
      // Add system prompt to the beginning of the conversation
      const messagesWithSystemPrompt = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ]

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_CONFIG.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: API_CONFIG.OPENAI_MODEL,
          messages: messagesWithSystemPrompt,
          temperature: API_CONFIG.OPENAI_TEMPERATURE,
          max_tokens: API_CONFIG.OPENAI_MAX_TOKENS,
          presence_penalty: 0.6,
          frequency_penalty: 0.3,
          top_p: 0.9,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get chat response')
      }

      const data = await response.json()
      return data.choices?.[0]?.message?.content || 'Sorry, I could not process your request.'
    } catch (error) {
      console.error('Error getting chat response:', error)
      return 'Sorry, there was an error connecting to the assistant. Please try again later.'
    }
  },

  async initiateCall(phoneNumber: string): Promise<string> {
    try {
      const response = await fetch('https://api.vapi.ai/v1/call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_CONFIG.VAPI_API_KEY}`,
        },
        body: JSON.stringify({
          phone: phoneNumber,
          assistant: {
            name: 'Octavia Assistant',
            voice: 'en-US-Neural2-F',
            model: 'gpt-3.5-turbo',
            system_prompt: SYSTEM_PROMPT,
            initial_message: 'Hello, this is Octavia Hospital\'s virtual assistant. How can I help you today?',
            temperature: 0.7,
            max_tokens: 150,
          },
          metadata: {
            hospital: 'Octavia Hospital',
            department: 'General Inquiries',
            source: 'Website Chatbot'
          }
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to initiate call')
      }

      const data = await response.json()
      return data.message || 'Call initiated successfully.'
    } catch (error) {
      console.error('Error initiating call:', error)
      throw new Error('Failed to initiate call. Please try again later.')
    }
  }
} 