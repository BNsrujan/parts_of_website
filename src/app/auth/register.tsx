
import { BackgroundBeams } from "../../components/ui/background-bams";

export function Register() {
    return (
        <div className="h-screen max-w-2xl bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl p-4 content">
                <h6 className="relative z-10 text-md md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-semibold">
                    Create an account
                </h6>
            </div>
            <div className="flex flex-col justify-start ">
                <label className="text-white pb-3">Email</label>
                <input className=" bg-neutral-900 border-primary px-6   py-4 border rounded-md "
                    name="email"
                    placeholder="example@example.com"
                    type="email"
                    required
                />
                <label className="text-white pb-3">Email</label>
                <input className=" bg-neutral-900 border-primary px-6   py-4 border rounded-md "
                    name="email"
                    placeholder="example@example.com"
                    type="email"
                    required
                />
                <label className="text-white pb-3">Email</label>
                <input className=" bg-neutral-900 border-primary px-6   py-4 border rounded-md "
                    name="email"
                    placeholder="example@example.com"
                    type="email"
                    required
                />
                <label className="text-white pb-3">Email</label>
                <input className=" bg-neutral-900 border-primary px-6   py-4 border rounded-md "
                    name="email"
                    placeholder="example@example.com"
                    type="email"
                    required
                />
            </div>
            <BackgroundBeams />
        </div>
    );
}
