interface Choice {
    finish_reason: string,
    index: number,
    logprobs: any,
    text: string
     
}
export interface Poem {
    choices: Choice[]
    created: number,
    id: string;
    model: string;
    object: string
  }