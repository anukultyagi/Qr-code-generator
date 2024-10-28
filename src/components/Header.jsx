import { useContext, useState } from "react";
import { QrContext } from "../contexts/QrContext";
import QRCode from "react-qr-code";
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';

const Header = () => {
    const { setQrCodeText, qrCodeText, color, setColor } = useContext(QrContext);
    const [format, setFormat] = useState("png"); // Default format

    const downloadQRCode = async () => {
        if (format === "png") {
            const qrCodeElement = document.getElementById("qrCode");
            const canvas = await html2canvas(qrCodeElement);
            const dataURL = canvas.toDataURL("image/png");
            downloadjs(dataURL, "qr-code.png", "image/png");
        } else if (format === "svg") {
            const svgElement = document.getElementById("qrCode");
            const serializer = new XMLSerializer();
            const svgString = serializer.serializeToString(svgElement);

            const dataUrl = `data:image/svg+xml;base64,${btoa(svgString)}`;

            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'qr-code.svg';
            link.click();
        }
    };



    return (
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10 p-3 sm:p-6 text-gray-900 dark:text-gray-100 transition duration-300">
            {/* Column 1: Text Input and Color Picker */}
            <div className="w-full md:w-1/2 flex flex-col items-center space-y-4">
                <div className="w-full sm:w-4/5 grid grid-cols-1 sm:grid-cols-2 items-center gap-3 sm:gap-4">
                    <label htmlFor="qrText" className="sm:text-right font-medium text-gray-700 dark:text-gray-300">
                        Enter Text or URL
                    </label>
                    <input
                        id="qrText"
                        type="text"
                        placeholder="Enter text or URL"
                        className="p-2 border rounded w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        value={qrCodeText}
                        onChange={(e) => setQrCodeText(e.target.value)}
                        required
                    />
                </div>

                <div className="w-full sm:w-4/5 flex sm:grid sm:grid-cols-2 items-center gap-3 sm:gap-4">
                    <label htmlFor="qrColor" className="sm:text-right text-left font-medium text-gray-700 dark:text-gray-300">
                        Color
                    </label>
                    <input
                        id="qrColor"
                        type="color"
                        className="h-10 border rounded dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>
            </div>

            {/* Column 2: QR Code Display and Download Button */}
            <div className="w-full md:w-1/2 flex flex-col items-center space-y-4">
                <div id="qrCode" className="w-52 h-52 p-2 flex items-center justify-center rounded-md overflow-hidden bg-gray-200 dark:bg-gray-600">
                    <QRCode
                        title="Generated QR Code"
                        value={qrCodeText}
                        fgColor={color}
                    />
                </div>
                <div className="flex space-x-4 items-center">
                    <select
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        className="border rounded p-2 bg-gray-200 dark:bg-gray-600 dark:border-gray-700"
                    >
                        <option value="png">PNG</option>
                        <option value="svg">SVG</option>
                    </select>
                    <button
                        onClick={downloadQRCode}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-200">
                        Download
                    </button>
                    <img src="http://localhost:5173/c00c965a-0853-49b0-90fa-0922e50e7655" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
