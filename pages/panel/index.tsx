import { adminCheckAuth } from '@utils/session';

export const Panel: React.FC = () => {
  

    return (
        <>
          

        </>
    )
}


export default Panel;
Panel.displayName = "PanelPage";

export const getServerSideProps = adminCheckAuth({});