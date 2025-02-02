import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WriterModalProps {
  isOpen: boolean;
  onClose: () => void;
  writer: any;
  sopCount: number;
  lorCount: number;
  totalPrice: number;
}

export function WriterModal({ isOpen, onClose, writer, sopCount, lorCount, totalPrice }: WriterModalProps) {
  if (!writer) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-center shadow-xl transition-all">
                <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {writer.name}
                </Dialog.Title>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">SOPs:</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-900 dark:text-white">{sopCount}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">LORs:</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-900 dark:text-white">{lorCount}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between font-medium">
                        <span className="text-gray-900 dark:text-white">Total Price:</span>
                        <span className="text-gray-900 dark:text-white">${totalPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={onClose}
                      className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                    >
                      Close
                    </button>
                    <Link
                      to="/payment"
                      state={{ 
                        writer,
                        sopCount,
                        lorCount,
                        totalPrice,
                        service: 'writing'
                      }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300 flex items-center justify-center"
                      onClick={onClose}
                    >
                      <span>Pay ${totalPrice}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 