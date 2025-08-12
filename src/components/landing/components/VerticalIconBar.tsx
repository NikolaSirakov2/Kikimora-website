import React, { useState } from 'react';
import { Shield, Server, AlertTriangle, Globe, FolderKanban, Monitor } from 'lucide-react';

// Utility function for class name concatenation
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Types for better type safety
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface VerticalIconBarProps {
  className?: string;
  onFeatureSelect: (feature: Feature | null) => void;
}

const VerticalIconBar: React.FC<VerticalIconBarProps> = ({ className, onFeatureSelect }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const features: Feature[] = [
    {
      id: 'asm',
      title: 'Attack Surface Management',
      description: 'Discover subdomains, map services, and monitor public-facing assets.',
      icon: <Globe className="h-6 w-6" style={{ color: '#06b6d4' }} />,
    },
    {
      id: 'asset',
      title: 'Asset Management',
      description: 'Add, track, and update IT assets with detailed visibility.',
      icon: <Server className="h-6 w-6" style={{ color: '#8b5cf6' }} />,
    },
    {
      id: 'vuln',
      title: 'Vulnerability Analysis',
      description: 'List, score, and prioritize vulnerabilities for faster resolution.',
      icon: <AlertTriangle className="h-6 w-6" style={{ color: '#ef4444' }} />,
    },
    {
      id: 'webapp',
      title: 'Web Application Security',
      description: 'Scan and manage web apps with actionable security insights.',
      icon: <Shield className="h-6 w-6" style={{ color: '#10b981' }} />,
    },
    {
      id: 'project',
      title: 'Project Management',
      description: 'Track projects, link vulnerabilities, and streamline OWASP compliance.',
      icon: <FolderKanban className="h-6 w-6" style={{ color: '#f59e0b' }} />,
    },
    {
      id: 'endpoint',
      title: 'Endpoint Security',
      description: 'Deploy Wazuh, monitor integrity, and assess endpoint hardening.',
      icon: <Monitor className="h-6 w-6" style={{ color: '#06b6d4' }} />,
    },
  ];

  const handleIconClick = (feature: Feature) => {
    const newSelectedId = selectedId === feature.id ? null : feature.id;
    setSelectedId(newSelectedId);
    onFeatureSelect(newSelectedId ? feature : null);
  };

  return (
    <div className={cn('flex flex-col space-y-2', className)}>
      {features.map((feature) => (
        <button
          key={feature.id}
          onClick={() => handleIconClick(feature)}
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-200 hover:scale-110',
            'border border-gray-700/50 bg-gray-900/80 backdrop-blur-sm',
            selectedId === feature.id
              ? 'border-cyan-500/50 bg-gray-800/90 shadow-lg shadow-cyan-500/20'
              : 'hover:border-gray-600/50 hover:bg-gray-800/80',
          )}
        >
          {feature.icon}
        </button>
      ))}
    </div>
  );
};

export default VerticalIconBar;
