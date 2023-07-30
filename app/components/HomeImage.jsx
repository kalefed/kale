import Image from 'next/image'
import profile from 'public/profile.png'

export default function HomeImage() {

    return (
        <div className="w-1/2">
            <Image
                src={profile}
                alt="Picture of the author"
                className="object-cover w-full h-full rounded-tl-custom rounded-bl-custom"
            />
        </div>
    );
}