import { ReactNode, useEffect, useRef, useState } from "react";
import useToast, { IToast } from "@hooks/useCustom";

import { Icon } from "@iconify/react";
import { toast } from "@jotai/atoms";
import { useAtom } from "jotai";

enum bgColor {
  SUCCESS = "bg-green-700",
  ERROR = "bg-red-700",
  WARNING = "bg-orange-700",
  INFO = "bg-blue-700",
}

type Props = {
  children: ReactNode;
};

/**
 * Toast provider component
 * @param children ReactNode - children of component
 * @returns toast provider component
 * @example <RLToastProvider> <App /> </RLToastProvider>
 */
const RLToastProvider = ({ children }: Props) => {
  const { removeToast } = useToast()
  const [toasts] = useAtom(toast.toastAtom);
  const topLeftDivRef = useRef<HTMLDivElement>(null);
  const topMiddleDivRef = useRef<HTMLDivElement>(null);
  const topRightDivRef = useRef<HTMLDivElement>(null);
  const bottomLeftDivRef = useRef<HTMLDivElement>(null);
  const bottomMiddleDivRef = useRef<HTMLDivElement>(null);
  const bottomRightDivRef = useRef<HTMLDivElement>(null);

  /**
   * Set background color of toast according to type of toast
   * @param type ToastType - success | error | warning | info
   * @returns background color
   * @example setBgColor(toast.type)
   */
  const setBgColor = (type: string) => {
    if (type !== undefined) {
      switch (type) {
        case "success":
          return bgColor.SUCCESS
        case "error":
          return bgColor.ERROR
        case "warning":
          return bgColor.WARNING
        case "info":
          return bgColor.INFO
        default:
          return bgColor.SUCCESS;
      }
    } else { return bgColor.SUCCESS };
  }

  /**
   * Set icon of toast according to type of toast
   * @param i ToastType - success | error | warning | info
   * @returns icon name
   * @example setIcon(toast.type)
   */
  const setIcon = (i: string) => {
    if (i !== undefined) {
      switch (i) {
        case "success":
          return "mdi:success-bold"
        case "error":
          return "mdi:close-thick"
        case "warning":
          return "mdi:alert-circle"
        case "info":
          return "mdi:information"
        default:
          return "mdi:success-bold";
      }
    } else { return "mdi:success-bold" };
  }

  useEffect(() => {
    /**
     * TopLeft toast position style settings and animation settings according to options of toast.
     * @param toast IToast - type, title, description
     * @param index number - index of toast in array
     */
    toasts.topLeft.forEach((toast, index) => {
      if (topLeftDivRef.current) {
        topLeftDivRef.current.style.marginTop = "1rem";
        topLeftDivRef.current.style.left = "1rem";
        /**
         * Current toast position style settings (clientTop is height of toast div)
         */
        topLeftDivRef.current.style.top = `${topLeftDivRef.current.clientTop + (index * 6.5)}rem`;

        if (toast.options?.animation === "slide") {
          topLeftDivRef.current.style.transition = "all 0.5s ease-in-out";
          topLeftDivRef.current.style.animation = "slideToRight 0.7s linear";
          topLeftDivRef.current.style.animationIterationCount = "1";
        }

        if (toast.options?.animation === "fade") {
          topLeftDivRef.current.style.transition = "all 0.5s ease-in-out";
          topLeftDivRef.current.style.animation = "fadeIn 0.7s linear";
          topLeftDivRef.current.style.animationIterationCount = "1";
        }
      }
    })

    /**
     * TopMiddle toast position style settings and animation settings according to options of toast.
     * @param toast IToast - type, title, description
     * @param index number - index of toast in array
     */
    toasts.topMiddle.forEach((toast, index) => {
      if (topMiddleDivRef.current) {
        topMiddleDivRef.current.style.marginTop = "1rem";
        topMiddleDivRef.current.style.left = "50%";
        topMiddleDivRef.current.style.transform = "translateX(-50%)";
        /**
         * Current toast position style settings (clientTop is height of toast div)
         */
        topMiddleDivRef.current.style.top = `${topMiddleDivRef.current.clientTop + (index * 6.5)}rem`;

        if (toast.options?.animation === "slide") {
          topMiddleDivRef.current.style.transition = "all 0.5s ease-in-out";
          topMiddleDivRef.current.style.animation = "slideToBottom 0.7s linear";
          topMiddleDivRef.current.style.animationIterationCount = "1";
        }

        if (toast.options?.animation === "fade") {
          topMiddleDivRef.current.style.transition = "all 0.5s ease-in-out";
          topMiddleDivRef.current.style.animation = "fadeIn 0.7s linear";
          topMiddleDivRef.current.style.animationIterationCount = "1";
        }
      }
    })

    /**
     * TopRight toast position style settings and animation settings according to options of toast.
     * @param toast IToast - type, title, description
     * @param index number - index of toast in array
     */
    toasts.topRight.forEach((toast, index) => {
      if (topRightDivRef.current) {
        topRightDivRef.current.style.marginTop = "1rem";
        topRightDivRef.current.style.right = "1rem";
        /**
         * Current toast position style settings (clientTop is height of toast div)
         */
        topRightDivRef.current.style.top = `${topRightDivRef.current.clientTop + (index * 6.5)}rem`;

        if (toast.options?.animation === "slide") {
          topRightDivRef.current.style.transition = "all 0.5s ease-in-out";
          topRightDivRef.current.style.animation = "slideToLeft 0.7s linear";
          topRightDivRef.current.style.animationIterationCount = "1";
        }

        if (toast.options?.animation === "fade") {
          topRightDivRef.current.style.transition = "all 0.5s ease-in-out";
          topRightDivRef.current.style.animation = "fadeIn 0.7s linear";
          topRightDivRef.current.style.animationIterationCount = "1";
        }
      }
    })

    /**
     * BottomLeft toast position style settings and animation settings according to options of toast.
     * @param toast IToast - type, title, description
     * @param index number - index of toast in array
     */
    toasts.bottomLeft.forEach((toast, index) => {
      if (bottomLeftDivRef.current) {
        bottomLeftDivRef.current.style.marginBottom = "1rem";
        bottomLeftDivRef.current.style.left = "1rem";
        /**
         * Current toast position style settings (clientTop is height of toast div)
         */
        bottomLeftDivRef.current.style.bottom = `${bottomLeftDivRef.current.clientTop + (index * 6.5)}rem`;

        if (toast.options?.animation === "slide") {
          bottomLeftDivRef.current.style.transition = "all 0.5s ease-in-out";
          bottomLeftDivRef.current.style.animation = "slideToRight 0.7s linear";
          bottomLeftDivRef.current.style.animationIterationCount = "1";
        }

        if (toast.options?.animation === "fade") {
          bottomLeftDivRef.current.style.transition = "all 0.5s ease-in-out";
          bottomLeftDivRef.current.style.animation = "fadeIn 0.7s linear";
          bottomLeftDivRef.current.style.animationIterationCount = "1";
        }
      }
    })

    /**
     * BottomRight toast position style settings and animation settings according to options of toast.
     * @param toast IToast - type, title, description
     * @param index number - index of toast in array
     */
    toasts.bottomRight.forEach((toast, index) => {
      if (bottomRightDivRef.current) {
        bottomRightDivRef.current.style.marginBottom = "1rem";
        bottomRightDivRef.current.style.right = "1rem";
        /**
         * Current toast position style settings (clientTop is height of toast div)
         */
        bottomRightDivRef.current.style.bottom = `${bottomRightDivRef.current.clientTop + (index * 6.5)}rem`;

        if (toast.options?.animation === "slide") {
          bottomRightDivRef.current.style.transition = "all 0.5s ease-in-out";
          bottomRightDivRef.current.style.animation = "slideToLeft 0.7s linear";
          bottomRightDivRef.current.style.animationIterationCount = "1";
        }

        if (toast.options?.animation === "fade") {
          bottomRightDivRef.current.style.transition = "all 0.5s ease-in-out";
          bottomRightDivRef.current.style.animation = "fadeIn 0.7s linear";
          bottomRightDivRef.current.style.animationIterationCount = "1";
        }
      }
    })

    /**
     * BottomMiddle toast position style settings and animation settings according to options of toast.
     * @param toast IToast - type, title, description
     * @param index number - index of toast in array
     */
    toasts.bottomMiddle.forEach((toast, index) => {
      if (bottomMiddleDivRef.current) {
        bottomMiddleDivRef.current.style.marginBottom = "1rem";
        bottomMiddleDivRef.current.style.left = "50%";
        bottomMiddleDivRef.current.style.transform = "translateX(-50%)";
        /**
         * Current toast position style settings (clientTop is height of toast div)
         */
        bottomMiddleDivRef.current.style.bottom = `${bottomMiddleDivRef.current.clientTop + (index * 6.5)}rem`;

        if (toast.options?.animation === "slide") {
          bottomMiddleDivRef.current.style.transition = "all 0.5s ease-in-out";
          bottomMiddleDivRef.current.style.animation = "slideToTop 0.7s linear";
          bottomMiddleDivRef.current.style.animationIterationCount = "1";
        }

        if (toast.options?.animation === "fade") {
          bottomMiddleDivRef.current.style.transition = "all 0.5s ease-in-out";
          bottomMiddleDivRef.current.style.animation = "fadeIn 0.7s linear";
          bottomMiddleDivRef.current.style.animationIterationCount = "1";
        }
      }
    })
  }, [toasts]);

  /**
   * Create new toast div according to type of toast
   * @param toast IToast - type, title, description
   * @returns new toast div
   * @example newToastDiv(toast)
   */
  const newToastDiv = (toast: IToast) => (
    <div key={toast.id} className={`w-72 h-20 group shadow-slate-300 shadow-sm ${setBgColor(toast.type)} shadow-sm rounded-md`}>
      <div className='flex flex-col w-full h-full items-startjustify-start'>
        <div className={`flex items-center justify-between w-full h-6 ${toast.type === "success" ? "bg-green-800" : `${toast.type === "error" ? "bg-red-800" : `${toast.type === "warning" ? "bg-orange-800" : `bg-blue-800`}`}`} border-b border-b-slate-400`}>
          <div className='px-2 text-sm text-white pointer-events-none select-none'>{toast.title}</div>
          <Icon className="invisible m-1 rounded-md cursor-pointer group-hover:visible hover:bg-slate-400" onClick={() => removeToast(toast.id)} icon="iconamoon:close-thin" height={20} width={20} />
        </div>
        <div className='relative flex items-start justify-start h-full px-2 py-1.5 overflow-y-scroll'>
          <Icon icon={setIcon(toast.type)} height={20} width={20} color="white" className={`absolute top-1 ${toast.type === "success" ? "!text-emerald-400" : `${toast.type === "error" ? "!text-rose-400" : `${toast.type === "warning" ? "!text-yellow-400" : `!text-sky-400`}`}`} pointer-events-none select-none left-1`} />
          <div className={`text-xs indent-5 max-h-[48px] text-slate-200`}>{toast.description}</div>
        </div>
        <div className='flex justify-between px-2 pb-0.5'>
          <p className="text-xs text-slate-400">{toast.created.time}</p>
          <p className="text-xs text-slate-400">{toast.created.date}</p>
        </div>
      </div>
    </div>
  )

  /*Drag and Delete Start */
  const areaRef = useRef<any>()
  const [deleteId, setDeleteId] = useState<string>()
  const [position, setPosition] = useState<string>()
  const [autoClose, setAutoClose] = useState<number>()

  const createDeleteDiv = (dataPosition: string) => {
    const dropAreaRef = areaRef.current

    dropAreaRef.classList.add("fixed")
    dropAreaRef.classList.add("z-[9999]")
    dropAreaRef.classList.add("flex")
    dropAreaRef.classList.add("justify-center")
    dropAreaRef.classList.add("items-center")
    dropAreaRef.classList.add("!text-green-400")
    dropAreaRef.classList.add("font-bold")
    dropAreaRef.classList.add("tracking-widest")
    dropAreaRef.classList.add("border-2")
    dropAreaRef.classList.add("border-dashed")
    dropAreaRef.classList.add("border-green-400")
    dropAreaRef.classList.add("animate-pulse")
    dropAreaRef.classList.add("text-center")

    if (dataPosition === "topRight" || dataPosition === "bottomRight") {
      dropAreaRef.classList.contains("left-2") && dropAreaRef.classList.remove("left-2")
      dropAreaRef.classList.contains("bottom-2") && dropAreaRef.classList.remove("bottom-2")
      dropAreaRef.classList.add("right-2")
      dropAreaRef.classList.add("top-2")
      dropAreaRef.classList.contains("w-full") && dropAreaRef.classList.remove("w-full");
      dropAreaRef.classList.contains("h-20") && dropAreaRef.classList.remove("h-20")
      dropAreaRef.classList.add("w-20");
      dropAreaRef.classList.add("h-full")
      dropAreaRef.innerHTML = "SİLMEK İÇİN BURAYA BIRAKINIZ"
      dropAreaRef.style.writingMode = "vertical-lr"

    } else if (dataPosition === "topLeft" || dataPosition === "bottomLeft") {
      dropAreaRef.classList.contains("right-2") && dropAreaRef.classList.remove("right-2")
      dropAreaRef.classList.contains("bottom-2") && dropAreaRef.classList.remove("bottom-2")
      dropAreaRef.classList.add("left-2")
      dropAreaRef.classList.add("top-2")
      dropAreaRef.classList.contains("w-full") && dropAreaRef.classList.remove("w-full");
      dropAreaRef.classList.contains("h-20") && dropAreaRef.classList.remove("h-20")
      dropAreaRef.classList.add("w-20");
      dropAreaRef.classList.add("h-full")
      dropAreaRef.innerHTML = "SİLMEK İÇİN BURAYA BIRAKINIZ"
      dropAreaRef.style.writingMode = "vertical-lr"

    } else if (dataPosition === "topMiddle") {
      dropAreaRef.classList.contains("right-2") && dropAreaRef.classList.remove("right-2")
      dropAreaRef.classList.contains("bottom-2") && dropAreaRef.classList.remove("bottom-2")
      !dropAreaRef.classList.contains("left-2") && dropAreaRef.classList.add("left-2")
      !dropAreaRef.classList.contains("top-2") && dropAreaRef.classList.add("top-2")
      dropAreaRef.classList.contains("w-20") && dropAreaRef.classList.remove("w-20");
      dropAreaRef.classList.contains("h-full") && dropAreaRef.classList.remove("h-full")
      !dropAreaRef.classList.contains("w-full") && dropAreaRef.classList.add("w-full");
      !dropAreaRef.classList.contains("h-20") && dropAreaRef.classList.add("h-20")
      dropAreaRef.style.writingMode = "vertical-lr" && dropAreaRef.style.removeProperty("writingMode")
      dropAreaRef.innerHTML = "SİLMEK İÇİN BURAYA BIRAKINIZ"
    } else {
      dropAreaRef.classList.contains("right-2") && dropAreaRef.classList.remove("right-2")
      dropAreaRef.classList.contains("top-2") && dropAreaRef.classList.remove("top-2")
      !dropAreaRef.classList.contains("left-2") && dropAreaRef.classList.add("left-2")
      !dropAreaRef.classList.contains("bottom-2") && dropAreaRef.classList.add("bottom-2")
      dropAreaRef.classList.contains("w-20") && dropAreaRef.classList.remove("w-20");
      dropAreaRef.classList.contains("h-full") && dropAreaRef.classList.remove("h-full")
      !dropAreaRef.classList.contains("w-full") && dropAreaRef.classList.add("w-full");
      !dropAreaRef.classList.contains("h-20") && dropAreaRef.classList.add("h-20")
      dropAreaRef.style.writingMode = "vertical-lr" && dropAreaRef.style.removeProperty("writingMode")
      dropAreaRef.innerHTML = "SİLMEK İÇİN BURAYA BIRAKINIZ"
    }
  }

  const dragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const eventTarget = e.currentTarget as HTMLElement
    const id = eventTarget.getAttribute("data-id")
    const dataPosition = eventTarget.getAttribute("data-position")
    const autoclosetime = eventTarget.getAttribute("data-autoclosetime")
    const dropAreaRef = areaRef.current
    dropAreaRef.style.writingMode && dropAreaRef.style.removeProperty("writingMode")
    setTimeout(() => {
      eventTarget.style.display = "none"
    }, 0);
    setPosition(`${dataPosition}`)
    setAutoClose(Number(autoclosetime))
    setDeleteId(`${id?.toString()}`)
    createDeleteDiv(`${dataPosition}`)
    setTimeout(() => {
      dropAreaRef.innerHTML = ""
      dropAreaRef.className = ""
    }, Number(autoclosetime) ? Number(autoclosetime) : 1000);
  }

  const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    const dropAreaRef = areaRef.current
    dropAreaRef.classList.contains("border-dashed") && dropAreaRef.classList.remove("border-dashed") && dropAreaRef.classList.add("border-solid")
    dropAreaRef.classList.contains("border-green-400") && dropAreaRef.classList.remove("border-green-400") && dropAreaRef.classList.add("border-red-400")
    dropAreaRef.classList.contains("text-green-400") && dropAreaRef.classList.remove("text-green-400") && dropAreaRef.classList.add("text-red-700")
  }

  const dragEnd = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault()
    const eventTarget = e.currentTarget
    const dropAreaRef = areaRef.current

    setTimeout(() => {
      dropAreaRef.style.removeProperty("writingMode")
      eventTarget.style.removeProperty("transition")
      eventTarget.style.removeProperty("animation")
      eventTarget.style.display = "block"
    }, 0);

    dropAreaRef.innerHTML = ""
    dropAreaRef.className = ""

  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const dropAreaRef = areaRef.current
    removeToast(`${deleteId}`)
    /*Deleted toast to alert text Start*/
    const alertDeleted = (target: string) => {
      switch (target) {
        case "topLeft":
          dropAreaRef.innerHTML = "SİLİNDİ"
          dropAreaRef.style.writingMode = "vertical-lr"
          break
        case "topRight":
          dropAreaRef.innerHTML = "SİLİNDİ"
          dropAreaRef.style.writingMode = "vertical-lr"
          break
        case "bottomLeft":
          dropAreaRef.innerHTML = "SİLİNDİ"
          dropAreaRef.style.writingMode = "vertical-lr"
          break
        case "bottomRight":
          dropAreaRef.innerHTML = "SİLİNDİ"
          dropAreaRef.style.writingMode = "vertical-lr"
          break
        case "topMiddle":
          dropAreaRef.innerHTML = "SİLİNDİ"
          dropAreaRef.style.writingMode = "horizontal-tb"
          break
        case "bottomMiddle":
          dropAreaRef.innerHTML = "SİLİNDİ"
          dropAreaRef.style.writingMode = "horizontal-tb"
          break
        default:
          break;
      }
    }

    alertDeleted(`${position}`)
    /*Deleted toast to alert text End*/
    setTimeout(() => {
      dropAreaRef.innerHTML = ""
      dropAreaRef.className = ""
    }, autoClose ? autoClose + 10 : 1000);
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const dropAreaRef = areaRef.current
    dropAreaRef.classList.add("border-2")
    dropAreaRef.classList.add("border-dashed")
    dropAreaRef.classList.add("border-red-400")
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const dropAreaRef = areaRef.current
    dropAreaRef.classList.add("border-green-400")

  }
  /*Drag and Delete End */

  return (
    <>
      <div ref={areaRef}
        onDragEnter={(e) => dragEnter(e)}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      />

      {toasts.topLeft.map((toast, index) => (
        <div key={index} ref={topLeftDivRef}
          data-position={toast.options?.position}
          data-autoclosetime={toast.options?.autoCloseTime}
          onDrop={e => handleDrop(e)}
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragEnd={(e) => dragEnd(e, index)}
          data-id={toast.id}
          className={`fixed z-[9999]`}
        >
          {newToastDiv(toast)}
        </div>
      ))}

      {toasts.topMiddle.map((toast, index) => (
        <div key={index} ref={topMiddleDivRef}
          data-position={toast.options?.position}
          data-autoclosetime={toast.options?.autoCloseTime}
          onDrop={e => handleDrop(e)}
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragEnd={(e) => dragEnd(e, index)}
          data-id={toast.id}
          className={`fixed z-[9999]`}
        >
          {newToastDiv(toast)}
        </div>
      ))}

      {toasts.topRight.map((toast, index) => (
        <div key={index} ref={topRightDivRef}
          data-position={toast.options?.position}
          data-autoclosetime={toast.options?.autoCloseTime}
          onDrop={e => handleDrop(e)}
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragEnd={(e) => dragEnd(e, index)}
          data-id={toast.id}
          className={`fixed z-[9999]`}
        >
          {newToastDiv(toast)}
        </div>
      ))}

      {toasts.bottomRight.map((toast, index) => (
        <div key={index} ref={bottomRightDivRef}
          data-position={toast.options?.position}
          data-autoclosetime={toast.options?.autoCloseTime}
          onDrop={e => handleDrop(e)}
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragEnd={(e) => dragEnd(e, index)}
          data-id={toast.id}
          className={`fixed z-[9999]`}
        >
          {newToastDiv(toast)}
        </div>
      ))}

      {toasts.bottomMiddle.map((toast, index) => (
        <div key={index} ref={bottomMiddleDivRef}
          data-position={toast.options?.position}
          data-autoclosetime={toast.options?.autoCloseTime}
          onDrop={e => handleDrop(e)}
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragEnd={(e) => dragEnd(e, index)}
          data-id={toast.id}
          className={`fixed z-[9999]`}
        >
          {newToastDiv(toast)}
        </div>
      ))}

      {toasts.bottomLeft.map((toast, index) => (
        <div key={index} ref={bottomLeftDivRef}
          data-position={toast.options?.position}
          data-autoclosetime={toast.options?.autoCloseTime}
          onDrop={e => handleDrop(e)}
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragEnd={(e) => dragEnd(e, index)}
          data-id={toast.id}
          className={`fixed z-[9999]`}
        >
          {newToastDiv(toast)}
        </div>
      ))}
      {children}
    </>
  );
}

export default RLToastProvider;