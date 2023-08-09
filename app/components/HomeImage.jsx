import Image from 'next/image'
import profile from 'public/profile.png'
import profile2 from 'public/profile2.jpg'

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