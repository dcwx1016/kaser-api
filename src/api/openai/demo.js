import OpenAI from 'openai';//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

const openai = new OpenAI({apiKey : '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'});

async function fetchCompletion(content) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content }],
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0];
  console.log(completion.choices[0]); // { message: {role: 'assistant', content: ""}, ...}
}

fetchCompletion('Say this is a test');