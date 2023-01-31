const generate = async (input) => {
  try{
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
    apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: input,
    temperature: 0.4,
    max_tokens: 1024
    });
    return response.data.choices[0].text
  }catch(e){
    console.log(e)
  }

}

export default generate