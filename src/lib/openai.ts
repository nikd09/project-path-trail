import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, API calls should go through your backend
});

interface Resource {
  title: string;
  url: string;
  description: string;
}

interface AIRoadmapResponse {
  books: Resource[];
  videos: Resource[];
  courses: Resource[];
  subjects: string[];
  exams: Resource[];
  documents: string[];
  universities: Resource[];
}

export async function generateAIRoadmap(ambition: string): Promise<AIRoadmapResponse> {
  const prompt = `Create a detailed career roadmap for someone who wants to ${ambition}. 
  Provide specific recommendations in JSON format with the following structure:
  {
    "books": [{"title": "Book Title", "url": "Amazon/Goodreads URL", "description": "Brief description"}],
    "videos": [{"title": "Video Title", "url": "YouTube/Coursera URL", "description": "Brief description"}],
    "courses": [{"title": "Course Name", "url": "Course Platform URL", "description": "Brief description"}],
    "subjects": ["Key subject 1", "Key subject 2"],
    "exams": [{"title": "Exam/Certification Name", "url": "Official exam page URL", "description": "Brief description"}],
    "documents": ["Required document 1", "Required document 2"],
    "universities": [{"title": "University Name", "url": "University program URL", "description": "Relevant program details"}]
  }
  Include only real, verifiable resources with actual URLs.`;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4",
      response_format: { type: "json_object" }
    });

    const response = JSON.parse(completion.choices[0].message.content);
    return response as AIRoadmapResponse;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate roadmap');
  }
}