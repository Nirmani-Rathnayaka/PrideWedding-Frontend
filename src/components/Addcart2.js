
import App1 from './App1';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

export default function Addcart2(){
  return(
    <div>
   <QueryClientProvider client={client}>
    
    <App1/>
    


    
  </QueryClientProvider>
  </div>
  
);
}
