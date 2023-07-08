import {QueryClient, QueryClientProvider } from "react-query"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Home />
        </MainLayout>
      </ThemeProvider>
    </QueryClientProvider>

  );
}

export default App;
