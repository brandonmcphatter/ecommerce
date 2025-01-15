import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAmazon} from "@fortawesome/free-brands-svg-icons";

export default function ShopSaveCard({description, action, }: {description: string, action: string}) {
    return (
        <div className={'bg-gray-200 rounded flex justify-between p-2'}>
            <div className={'flex flex-col gap-3 w-3/4'}>
                <h3 className={'font-bold text-2xl md:text-sm'}>{description}</h3>
                <p>{action}</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faAmazon}/>
            </div>
        </div>
    )
}