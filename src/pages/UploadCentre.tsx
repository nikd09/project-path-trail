import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, AlertCircle, CheckCircle, X } from 'lucide-react';

interface DocumentType {
  id: string;
  title: string;
  description: string;
  required: boolean;
  maxSize: string;
  allowedTypes: string[];
  status?: 'pending' | 'uploaded' | 'error';
  errorMessage?: string;
  file?: File;
}

export function UploadCentre() {
  const [documents, setDocuments] = useState<DocumentType[]>([
    {
      id: 'passport-photo',
      title: 'Passport-sized Photo',
      description: 'Not older than six months, white background',
      required: true,
      maxSize: '2MB',
      allowedTypes: ['image/jpeg', 'image/png'],
    },
    {
      id: 'passport-copy',
      title: 'Passport Copy',
      description: 'First and last page in single PDF',
      required: true,
      maxSize: '5MB',
      allowedTypes: ['application/pdf'],
    },
    {
      id: 'mark-sheets',
      title: 'Semester Mark Sheets',
      description: 'All semesters consolidated in single PDF',
      required: true,
      maxSize: '10MB',
      allowedTypes: ['application/pdf'],
    },
    {
      id: 'degree',
      title: "Bachelor's Degree",
      description: 'Final degree certificate or provisional',
      required: true,
      maxSize: '5MB',
      allowedTypes: ['application/pdf'],
    },
    {
      id: 'language',
      title: 'Language Certificates',
      description: 'German and/or English certificates',
      required: true,
      maxSize: '5MB',
      allowedTypes: ['application/pdf'],
    },
    {
      id: 'cv',
      title: 'CV/Resume',
      description: 'Updated CV in PDF format',
      required: true,
      maxSize: '2MB',
      allowedTypes: ['application/pdf'],
    }
  ]);

  const getUploadProgress = () => {
    const uploadedCount = documents.filter(doc => doc.status === 'uploaded').length;
    const totalRequired = documents.filter(doc => doc.required).length;
    const progress = (uploadedCount / totalRequired) * 100;
    return Math.round(progress);
  };

  const handleFileUpload = (documentId: string, file: File) => {
    const document = documents.find(doc => doc.id === documentId);
    if (!document) return;

    // Validate file size
    const maxSizeInBytes = parseInt(document.maxSize) * 1024 * 1024; // Convert MB to bytes
    if (file.size > maxSizeInBytes) {
      setDocuments(docs => docs.map(doc => 
        doc.id === documentId ? {
          ...doc,
          status: 'error',
          errorMessage: `File size exceeds ${document.maxSize} limit`
        } : doc
      ));
      return;
    }

    // Validate file type
    if (!document.allowedTypes.includes(file.type)) {
      setDocuments(docs => docs.map(doc => 
        doc.id === documentId ? {
          ...doc,
          status: 'error',
          errorMessage: `Invalid file type. Allowed types: ${document.allowedTypes.map(type => type.split('/')[1]).join(', ')}`
        } : doc
      ));
      return;
    }

    // Upload file (simulated for now)
    setDocuments(docs => docs.map(doc =>
      doc.id === documentId ? {
        ...doc,
        status: 'uploaded',
        file: file,
        errorMessage: undefined
      } : doc
    ));
  };

  const handleRemoveFile = (documentId: string) => {
    setDocuments(docs => docs.map(doc =>
      doc.id === documentId ? {
        ...doc,
        status: undefined,
        file: undefined,
        errorMessage: undefined
      } : doc
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-[#1a2942] rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-white mb-2">
          Document Upload Centre
        </h1>
        <p className="text-gray-400">
          Upload and manage your application documents
        </p>
      </div>

      {/* Upload Progress */}
      <div className="bg-[#1a2942] rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Document Upload Progress</h2>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
            style={{ width: `${getUploadProgress()}%` }}
          ></div>
        </div>
        <p className="text-gray-400 mt-2">
          {getUploadProgress()}% of required documents uploaded
        </p>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <DocumentUploadCard 
            key={doc.id} 
            document={doc}
            onUpload={handleFileUpload}
            onRemove={handleRemoveFile}
          />
        ))}
      </div>
    </div>
  );
}

interface DocumentUploadCardProps {
  document: DocumentType;
  onUpload: (documentId: string, file: File) => void;
  onRemove: (documentId: string) => void;
}

function DocumentUploadCard({ document, onUpload, onRemove }: DocumentUploadCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      onUpload(document.id, file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(document.id, file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-[#1a2942] rounded-2xl p-6 ${
        isDragging ? 'border-2 border-blue-400 border-dashed' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{document.title}</h3>
          <p className="text-gray-400 text-sm">{document.description}</p>
          <div className="flex items-center space-x-4 mt-2">
            <span className="text-xs text-gray-500">Max size: {document.maxSize}</span>
            <span className="text-xs text-gray-500">
              Types: {document.allowedTypes.map(type => type.split('/')[1]).join(', ')}
            </span>
          </div>
        </div>
        {document.required && (
          <span className="text-xs text-red-400">Required</span>
        )}
      </div>

      {document.status === 'error' && (
        <div className="flex items-center space-x-2 text-red-400 text-sm mb-4">
          <AlertCircle className="w-4 h-4" />
          <span>{document.errorMessage}</span>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept={document.allowedTypes.join(',')}
        onChange={handleFileInput}
      />

      {document.status === 'uploaded' ? (
        <div className="flex items-center justify-between bg-green-500/10 text-green-400 rounded-lg px-4 py-2">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>
              {document.file?.name} ({(document.file?.size / 1024 / 1024).toFixed(2)} MB)
            </span>
          </div>
          <button 
            onClick={() => onRemove(document.id)}
            className="hover:text-green-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={handleButtonClick}
          className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
        >
          <Upload className="w-4 h-4" />
          <span>Upload Document</span>
        </button>
      )}
    </motion.div>
  );
} 