export type IconProps = {
    width?: number,
    height?: number,
    fill?: string,
    className?: string
}

export function getIconDetails(width?: number, height?: number, fill?: string) {
    const pwidth = width ?? "32";
    const pheight = height ?? "32"
    const pfill = fill ?? "#000000"

    return { pwidth, pheight, pfill }
}