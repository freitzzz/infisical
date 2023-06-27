import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "@app/components/basic/buttons/Button";
import { usePopUp } from "@app/hooks/usePopUp";

import { TaxIDModal } from "./TaxIDModal";
import { TaxIDTable } from "./TaxIDTable";

export const TaxIDSection = () => {
    const { popUp, handlePopUpOpen, handlePopUpClose, handlePopUpToggle } = usePopUp([
        "addTaxID"
    ] as const);

    return (
        <div className="p-4 bg-mineshaft-900 mt-8 max-w-screen-lg rounded-lg border border-mineshaft-600">
            <div className="flex items-center mb-8">
                <h2 className="text-xl font-semibold flex-1 text-white">
                    Tax ID
                </h2>
                <div className="inline-block">
                    <Button
                        text="Add Tax ID"
                        type="submit"
                        color="mineshaft"
                        size="md"
                        icon={faPlus}
                        onButtonPressed={() => handlePopUpOpen("addTaxID")}
                    />
                </div>
            </div>
            <TaxIDTable />
            <TaxIDModal 
                popUp={popUp}
                handlePopUpClose={handlePopUpClose}
                handlePopUpToggle={handlePopUpToggle}
            />
        </div>    
    );
}