import { useRouter } from 'next/router';

const MyApp = ({
  MainComponent, 
  pageProps,
}) => {    
const router = useRouter();
    const [pageLoading, setPageLoading] = React.useState<boolean>(false);
    React.useEffect(() => {
        const handleStart = () => { setPageLoading(true); };
        const handleComplete = () => { setPageLoading(false); };
    
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
      }, [router]);

return (
  ...
  { pageLoading 
    ? (<div>Loading</div>)
    : <MainComponent {...pageProps} />
  }
  ...

)

}
