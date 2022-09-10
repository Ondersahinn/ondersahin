import { RootState } from "@redux/reducers";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export default function useTranslation() {
    const resources = useSelector((state: RootState) => state.translation.resources);
    
    const t = useCallback((key: string): any => {
        if (resources.length > 0) {
            const result = resources.find(x => x["key"] == key);

            return result?.value
        }
        else {
            return "";
        }

    }, [resources])

    return { t };
}
