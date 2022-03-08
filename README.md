# React with TS

### Bootstraping Project 
- Use create react app command with --template paramter typescript.
- Remove usuless generated files such as tests and css.
- After removed file you must to remove this files imports from other files. 

#### Libraries 
<h5>In typescript we should install @types for installed lifraries</h5>

- styled-component (@types/styled-components)

### Implementation 
- Add google fonts in public html.
- We will use triviaAPI for questions.
- Create components folder 
- Create API.ts (Loading and fetching data for API)
- Create utils.ts (Small functions)

#### TypeScript 
- We need to define types for events for example if we are taking event parameter on function we need to say event type and generic 
- For taking props to component we need to define type Props and this is object which is store prop element types
- We need to use type for function component (FC) and give here type Props
- We can define enums in typescript 
- Define like this => Export enum EnumName 
- And use it like type : EnumName
<h6>DangerouslySetInnerHTML</h6>